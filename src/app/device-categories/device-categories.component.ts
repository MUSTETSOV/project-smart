import { Component, OnInit } from '@angular/core';
import { GetCategoriesService } from './get-categories.service';

@Component({
  selector: 'app-device-categories',
  templateUrl: './device-categories.component.html',
  styleUrls: ['./device-categories.component.scss']
})
export class DeviceCategoriesComponent implements OnInit {

  allCategories:any[] = [];



  constructor( private categoryService: GetCategoriesService) {
    this.allCategories = this.categoryService.getImages();
  }

  ngOnInit() {
  }

}
