import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero'; // interfaz
//import { HEROES } from '../../mock-heroes'; //constante con 10 héroes - sustituido por el servicio
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  // hero: Hero = {  //Propiedad de tipo Hero llamada hero - cambiado al introducir mock-heroes.
  //   id: 1,
  //   name: 'windstorm'
  // };

  //selectedHero?: Hero;  //al hacer que los detalles del héroe vayan por una ruta independiente, este atributo no hace falta.

  //heroes = HEROES;  //el array de 10 héroes se guarda en esta propiedad - cambia al introducir el servicio.

  heroes: Hero[] = [];  //Propiedad llamada heroes que es un array vacío de tipo Hero.

  constructor(
    private heroService: HeroService,
    //private messageService: MessageService,
  ){
    //El constructor no debería hacer nada. Para que se llame a una función al montarse el componente, mejor hacer uso de ngOnInit.
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes(); //Esto no es asíncrono: si mock-heroes no estuviera disponible, el navegador se bloquearía.

    this.heroService.getHeroes()                  //Esto es asíncrono.
      .subscribe(heroes => this.heroes = heroes);
  }

  ///al hacer que los detalles del héroe vayan por una ruta independiente, esta función no hace falta.
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`Al habla HeroesComponent: se ha seleccionado el héroe/heroína ${hero.id} - ${hero.name}`);
  // }

  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(remainHeroes => remainHeroes !== hero);  //deja todos los héroes que no sean el/la eliminado/a.
    this.heroService.deleteHero(hero.id)
      .subscribe();
  }
}
