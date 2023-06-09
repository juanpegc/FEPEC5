import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-images',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  btnStyleList: string;
  btnStyleGrid: string;
  list: boolean = true;

  loading: boolean = true;

  constructor(private pokemonsService: PokemonsService) {
    this.btnStyleList = 'btn btn-primary m-1';
    this.btnStyleGrid = 'btn btn-secondary m-1';
  }

  ngOnInit(): void {
    this.pokemonsService.getAllPokemons().subscribe((pokemons) => {
      this.loading = false;
      this.pokemons = pokemons
        .filter((result) => result.image !== undefined)
        .slice(0, 1000);
    });
  }

  changeView(): void {
    if (this.list) {
      this.list = false;
      this.btnStyleList = 'btn btn-secondary m-1';
      this.btnStyleGrid = 'btn btn-primary m-1';
    } else {
      this.list = true;
      this.btnStyleList = 'btn btn-primary m-1';
      this.btnStyleGrid = 'btn btn-secondary m-1';
    }
  }
}
