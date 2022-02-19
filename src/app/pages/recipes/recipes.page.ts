import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { recipes } from '../../services/shared/data';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  params: string;
  categoryRecipes = [];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.params = this.route.snapshot.params['category'];
    this.getRecipes();
  }

  getRecipes() {
    this.categoryRecipes = recipes[this.params]?.hits;
  }

  detail({ recipe }) {
    const navExtras: NavigationExtras = {
      state: recipe,
    };

    const slug = this.parameterize(recipe.label);
    this.router.navigate([`/recipes/recipe-detail/${slug}`], navExtras);
  }

  parameterize(string) {
    return string
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 -]/, '')
      .replace(/\s/g, '-');
  }
}
