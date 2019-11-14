import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetServicesService {

  allServices = [];

  getImages() {
      return this.allServices = categoriesDetails.slice(0);
  }

  getImage(id: number) {
      return categoriesDetails.slice(0).find(Images => Images.id == id)
  }



  // tslint:disable-next-line: member-ordering


  constructor() { }
}

const categoriesDetails = [
  { id: 1, name: 'HVAC SERVICES', url: '../../assets/services/service1.png' },
  { id: 1, name: 'HOME APPLIANCES FIX', url: '../../assets/services/service2.png' },
  { id: 1, name: 'HANDY MAN SERVICES', url: '../../assets/services/service3.png' },
  { id: 1, name: 'HANDY MAN SERVICES', url: '../../assets/services/service4.png' },
  { id: 1, name: 'PEST CONTROL', url: '../../assets/services/service5.png' },
  { id: 1, name: 'ELECTRICAL WORKS', url: '../../assets/services/service6.png' }
]
