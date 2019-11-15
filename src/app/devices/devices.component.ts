import { Component, OnInit } from '@angular/core';
import { GetCategoriesService } from '../device-categories/get-categories.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  allCategories:any[] = [];



  constructor( private categoryService: GetCategoriesService) {
    this.allCategories = this.categoryService.getImages();
  }


  ngOnInit() {
  }

}
