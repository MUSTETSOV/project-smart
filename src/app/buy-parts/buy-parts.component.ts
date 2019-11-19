import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-buy-parts',
  templateUrl: './buy-parts.component.html',
  styleUrls: ['./buy-parts.component.scss']
})
export class BuyPartsComponent implements OnInit {

  tipes = new FormControl();
  tipesList: string[] = ['Refregerator', 'TV', 'Dryer', 'Scanner'];

  brands = new FormControl();
  brandsList: string[] = ['LG', 'Samsung', 'Apple', 'Bosch', 'Sony', 'Whirlpul'];

  categories = new FormControl();
  categoriesList: string[] = ['Refrigerator', 'Washing Machine', 'Dryer', 'Lawn Mower', 'Dishwasher', 'Snowblower'];



  sorts: string[] = ['Date', 'Type', 'Country', 'Functions'];

  constructor() { }

  ngOnInit() {
  }

}
