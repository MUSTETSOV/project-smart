import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetBrandsService {

  allBrands = [];

  getImages() {
      return this.allBrands = categoriesDetails.slice(0);
  }

  getImage(id: number) {
      return categoriesDetails.slice(0).find(Images => Images.id == id)
  }



  // tslint:disable-next-line: member-ordering


  constructor() { }
}

const categoriesDetails = [
  { id: 1,  url: '../../assets/brands/brand1.png' },
  { id: 1,  url: '../../assets/brands/brand2.png' },
  { id: 1,  url: '../../assets/brands/brand3.png' },
  { id: 1, url: '../../assets/brands/brand4.png' },
  { id: 1,  url: '../../assets/brands/brand5.png' },
  { id: 1,  url: '../../assets/brands/brand6.png' },
  { id: 1,  url: '../../assets/brands/brand7.png' },
  { id: 1,  url: '../../assets/brands/brand8.png' },
  { id: 1,  url: '../../assets/brands/brand9.png' },
  { id: 1,  url: '../../assets/brands/brand10.png' }
]
