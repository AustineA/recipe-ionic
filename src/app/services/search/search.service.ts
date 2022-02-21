import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrl: string =
    'https://api.edamam.com/api/recipes/v2?type=public&app_id=f2d8982a&app_key=0b3e58696136b691bf5fa338d52e9d01';
  constructor(private http: HttpClient) {}

  searchRecipeAPI(term) {
    return this.http.get(`${this.baseUrl}&q=${term}`);
  }
}
