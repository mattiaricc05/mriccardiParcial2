import { Component, Input, OnInit } from '@angular/core';
import { PaisDetail } from '../pais-detail';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css'],
  standalone: false
})
export class PaisDetailComponent implements OnInit {

  paisId!: string;
  @Input() paisDetail!: PaisDetail;

  constructor(
    private route: ActivatedRoute,
    private paisService: PaisService
  ) { }

  getPais() {
    this.paisService.getPais(this.paisId).subscribe(apiData => {this.paisDetail = apiData;})
  }

  ngOnInit() {
    if(this.paisDetail === undefined){
      this.paisId = this.route.snapshot.paramMap.get('id')!
      if(this.paisId){
        this.getPais();
      }
    }
  }

}
