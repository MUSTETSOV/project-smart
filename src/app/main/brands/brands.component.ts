import { Component, OnInit } from '@angular/core';
import { GetBrandsService } from './get-brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  allBrands:any[] = [];



  constructor( private getBrandService: GetBrandsService ) {
    this.allBrands = this.getBrandService.getImages();
  }

  ngOnInit() {
  }

}
