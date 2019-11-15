import { Component, OnInit } from '@angular/core';
import { GetCategoriesService } from '../device-categories/get-categories.service';
import { BrandsService } from '../services/brands.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  allCategories: any[] = [];

  public brands: any = [];


  constructor( private categoryService: GetCategoriesService, public brandsService: BrandsService) {


  }


  ngOnInit() {

    this.brandsService.GetBrands()
      .subscribe(data => this.brands = data);

    console.log('GGGGGGEEEEEETTTTT' + this.brands);
    console.log(this.brands);
  }

}