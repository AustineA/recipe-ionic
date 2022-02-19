import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipes = [
    {
      recipe: 'fish',
      featuredImage: '../../assets/images/Fish.jpg',
    },
    {
      recipe: 'chicken',
      featuredImage: '../../assets/images/Chicken.jpg',
    },
    {
      recipe: 'beef',
      featuredImage: '../../assets/images/Beef.jpg',
    },
    {
      recipe: 'juice',
      featuredImage: '../../assets/images/Fruit.jpg',
    },
    {
      recipe: 'vega',
      featuredImage: '../../assets/images/Vegan.jpg',
    },
    {
      recipe: 'salad',
      featuredImage: '../../assets/images/Salad.jpg',
    },
  ];

  constructor() {}

  goTo(recipe) {
    console.log(recipe);
  }
  search() {}
}
