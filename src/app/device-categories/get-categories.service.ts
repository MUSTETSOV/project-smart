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
  { id: 3, brand: 'Lenovo', url: '../../assets/categories/picture3.png' },
  { id: 4, brand: 'Apple', url: '../../assets/categories/picture1.png' },
  { id: 5, brand: 'Apple', url: '../../assets/categories/picture2.png' },
  { id: 6, brand: 'Lenovo', url: '../../assets/categories/picture3.png' },
  { id: 7, brand: 'Apple', url: '../../assets/categories/picture1.png' },
  { id: 8, brand: 'Apple', url: '../../assets/categories/picture2.png' },
  { id: 9, brand: 'Lenovo', url: '../../assets/categories/picture3.png' }

]
