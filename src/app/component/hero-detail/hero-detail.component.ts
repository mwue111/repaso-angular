import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero; // tiene el decorador @Input porque el componente externo HeroesComponent le pasa el héroe seleccionado

  constructor(
    private route: ActivatedRoute,    //info sobre la ruta: para sacar parámetros
    private heroService: HeroService, //info sobre los héroes para mostrar el que coincida con el id
    private location: Location,       //permite volver a la vista anterior
  ) {}

  ngOnInit():void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  //Number() porque los parámetros de ruta siempre son string.
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(){
    this.location.back();
  }
}
