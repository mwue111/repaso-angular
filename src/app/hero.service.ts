import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';  //para hacer llamadas asíncronas
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService, //Inyección de un servicio dentro de otro servicio, ambos se inyectarán en HeroesComponent.
  ) { }

  //Método para obtener información desde mock-heroes. NO es asíncrono. Sustituido al importar Observable.
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  //Asíncrono: of(HEROES) devuelve esto, que a su vez emite un array vacío de tipo Hero.
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Al habla HeroService: héroes buscados.');  //añade un mensaje
    return heroes;
  }

  getHero(id:number): Observable<Hero>{
    const hero = HEROES.find(selectedHero => selectedHero.id === id)!;
    this.messageService.add(`Al habla HeroService: héroe con id ${id} encontrado.`)
    return of(hero);
  }
}
