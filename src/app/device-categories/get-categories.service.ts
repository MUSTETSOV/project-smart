import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {

  allCategories = [];

  getImages() {
      return this.allCategories = categoriesDetails.slice(0);
  }

  getImage(id: number) {
      return categoriesDetails.slice(0).find(Images => Images.id == id)
  }



  // tslint:disable-next-line: member-ordering


  constructor() { }
}

const categoriesDetails = [
  { id: 1, brand: 'Apple', url: '../../assets/categories/picture1.png' },
  { id: 2, brand: 'Apple', url: '../../assets/categories/picture2.png' },
  { id: 11, brand: 'Lenovo', url: '../../assets/categories/picture3.png' },
  { id: 1, brand: 'Apple', url: '../../assets/categories/picture1.png' },
  { id: 2, brand: 'Apple', url: '../../assets/categories/picture2.png' },
  { id: 11, brand: 'Lenovo', url: '../../assets/categories/picture3.png' },
  { id: 1, brand: 'Apple', url: '../../assets/categories/picture1.png' },
  { id: 2, brand: 'Apple', url: '../../assets/categories/picture2.png' },
  { id: 11, brand: 'Lenovo', url: '../../assets/categories/picture3.png' }

]
