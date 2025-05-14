import { Component, OnInit } from '@angular/core';
import { PaisDetail } from '../pais-detail';
import { PaisService } from '../pais.service';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css'],
  standalone: false
})
export class PaisListComponent implements OnInit {
  paises: Array<PaisDetail> = [];
  selected: boolean = false;
  selectedPais!: PaisDetail;
  searchedPais: any;

  constructor(private paisService: PaisService) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe({next: apiData => this.paises = apiData });
  }

  onSelected(pais: PaisDetail): void {
    this.selected = true;
    this.selectedPais = pais;
  }

  ngOnInit() {
    this.getPaises();
  }

}
