import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-image',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon!: Pokemon;

  step = 0;

  constructor(
    private pokemonsService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.pokemonsService.getPokemonById(id).subscribe((pokemon) => {
      if (!pokemon) {
        this.router.navigateByUrl('/');
      }
      this.pokemon = pokemon;
    });
  }

  public onImageError(event: Event) {
    if (this.pokemon.image)
      (event.target as HTMLImageElement).src = this.pokemon.image + '/low.webp';
    else (event.target as HTMLImageElement).style.display = 'none';
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
