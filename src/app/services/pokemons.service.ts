import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('https://api.tcgdex.net/v2/en/cards');
  }

  getPokemonById(id: String | null): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://api.tcgdex.net/v2/en/cards/' + id);
  }
}
