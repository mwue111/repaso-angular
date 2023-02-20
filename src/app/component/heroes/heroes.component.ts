import { Component } from '@angular/core';
import { Hero } from '../../hero'; // interfaz
import { HEROES } from '../../mock-heroes'; //constante con 10 héroes

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // hero: Hero = {  //Propiedad de tipo Hero llamada hero
  //   id: 1,
  //   name: 'windstorm'
  // };
  selectedHero?: Hero;

  heroes = HEROES;  //el array de 10 héroes se guarda en esta propiedad

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
