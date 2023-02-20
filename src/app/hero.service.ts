import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';  //para hacer llamadas asíncronas
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'; //url que apunta a in-memory-data-service.ts
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService, //Inyección de un servicio dentro de otro servicio, ambos se inyectarán en HeroesComponent.
    private http: HttpClient,
  ) { }

  // getHeroes(): Observable<Hero[]> { //Asíncrono: of(HEROES) devuelve esto, que a su vez emite un array vacío de tipo Hero.
  //   const heroes = of(HEROES);
  //   this.messageService.add('Al habla HeroService: héroes buscados.');  //añade un mensaje
  //   return heroes;
  // }

  getHeroes(): Observable<Hero[]> { //Usando HttpClient se recogen datos desde el servidor.
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('héroes encontrados')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T){  //Función para manejar errores que permite que la app no se bloqueé.
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`'${operation}' falló: ${error.message}`);
      return of(result as T);
    };
  }

  // getHero(id:number): Observable<Hero>{
  //   const hero = HEROES.find(selectedHero => selectedHero.id === id)!;
  //   this.messageService.add(`Al habla HeroService: héroe con id ${id} encontrado.`)
  //   return of(hero);
  // }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Héroe con id ${id} encontrado`)),
      catchError(this.handleError<Hero>(`getHero id = ${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)  //put(URL, data que actualizar, opciones(cabeceras))
    .pipe(
      tap(_ => this.log(`Actualizado/a héroe/heroína con id ${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`Añadido/a con id ${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  deleteHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Eliminado/a héroe/heroína con id ${id}`)),
        catchError(this.handleError<Hero>('deletedHero'))
      );
  }

  private log(message: string) {
    this.messageService.add(`Al habla HeroService con este mensaje: ${message}`);
  }
}
