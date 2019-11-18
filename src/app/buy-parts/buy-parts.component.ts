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


  foods: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit() {
  }

}
