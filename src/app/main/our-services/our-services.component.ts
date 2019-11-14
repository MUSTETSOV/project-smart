import { Component, OnInit } from '@angular/core';
import { GetServicesService } from './get-services.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  allServices:any[] = [];



  constructor( private getServiceService: GetServicesService) {
    this.allServices = this.getServiceService.getImages();
  }

  ngOnInit() {
  }

}
