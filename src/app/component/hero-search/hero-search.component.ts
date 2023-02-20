import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../../hero';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<Hero[]>;

  private searchTerms = new Subject<string>();  //RxJS Subject: una fuente de observables y un observable también.

  constructor(
    private heroService: HeroService,
  ){}

  search(term: string): void{     //Al escribir en el input, el binding (input) hace una llamada a esta función search().
    this.searchTerms.next(term);  //searchTerms se convierte en un observable que emite un flujo constante de términos de búsqueda.
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms
      .pipe(
        debounceTime(300),      //esperar 300ms después de pulsar la tecla hasta tener en cuenta el término buscado
        distinctUntilChanged(), //ignorar nuevo término si es igual al término anterior: sólo se envía una petición si se cambia.
        switchMap((term: string) => this.heroService.searchHeroes(term)),
        //Llamada al método searchHeroes de heroService con los datos filtrados por las funciones anteriores.
        //Mantiene el orden de las peticiones y devuelve sólo la última llamada al método http.
      );
  }

}
