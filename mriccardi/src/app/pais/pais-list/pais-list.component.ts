import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css'],
  standalone: false
})
export class PaisListComponent implements OnInit {
  paises: Array<PaisDetail> = [];
  constructor() { }

  ngOnInit() {
  }

}
