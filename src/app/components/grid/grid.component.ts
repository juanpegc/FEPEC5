import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() pokemon!: Pokemon;
}
