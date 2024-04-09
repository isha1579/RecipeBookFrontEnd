import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../dataservice.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {
  
  vegRecipes: any[] = [];
  nonVegRecipes: any[] = [];
  veganRecipes: any[] = [];
  showVegRecipes: boolean = false;
  showNonVegRecipes: boolean = false;
  showVeganRecipes: boolean = false;
  recipes: any[] = [];
  showRecipes: boolean = false;
  searchQuery: string = '';
  searchResult: any[] = [];
  applyPipe: boolean = false;

  constructor(private http: HttpClient, private dataService: DataService) { }

  selectOption(option: string) {
    this.searchResult = [];
    this.searchQuery = '';
    this.showRecipes = false;
    this.showVegRecipes = false;
    this.showNonVegRecipes = false;
    this.showVeganRecipes = false;

    let apiUrl = '';

    switch(option) {
      case 'Veg':
        apiUrl = 'http://localhost:5086/api/Recipes/GetVegRecipes/veg';
        this.showVegRecipes = true;
        break;
      case 'Non-Veg':
        apiUrl = 'http://localhost:5086/api/Recipes/GetNonVegRecipes/non-veg';
        this.showNonVegRecipes = true;
        break;
      case 'Vegan':
        apiUrl = 'http://localhost:5086/api/Recipes/GetVeganRecipes/vegan';
        this.showVeganRecipes = true;
        break;
      case 'All':
        this.showRecipes = true;
        this.executeDataServiceMethod();
        break;
    }

    if (option !== 'All') {
      this.http.get<any[]>(apiUrl).subscribe(
        (recipes: any[]) => {
          switch(option) {
            case 'Veg':
              this.vegRecipes = recipes.map(recipe => ({ ...recipe, showDetails: false }));
              break;
            case 'Non-Veg':
              this.nonVegRecipes = recipes.map(recipe => ({ ...recipe, showDetails: false }));
              break;
            case 'Vegan':
              this.veganRecipes = recipes.map(recipe => ({ ...recipe, showDetails: false }));
              break;
          }
        },
        error => {
          console.error('Error fetching recipes:', error);
        }
      );
    }
  }

  executeDataServiceMethod() {
    this.dataService.getData().subscribe(
      (recipes: any[]) => {
        this.recipes = recipes.map(recipe => ({ ...recipe, showDetails: false }));
        this.showRecipes = true;
        this.showVegRecipes = false;
        this.showNonVegRecipes = false;
        this.showVeganRecipes = false; 
      },
      error => {
        console.error('Error fetching recipes:', error);
      }
    );
  }
  
  searchDish() {
    this.showRecipes = false;
    this.showVegRecipes = false;
    this.showNonVegRecipes = false;
    this.showVeganRecipes = false;
  
    if (this.searchQuery.trim() !== '') {
      this.searchResult = this.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      if (this.searchResult.length === 0) {
        // Dish not found
        this.searchResult = [{ name: 'Dish not found', id: null, category: null, ingredients: null, procedure: null }];
      }
    } else {
      this.searchResult = [];
    }
  }
  
  toggleDetails(recipe: any) {
    recipe.showDetails = !recipe.showDetails;
  }
  fetchRecipes() {
    this.dataService.getData().subscribe(
      (recipes: any[]) => {
        this.recipes = recipes;
      },
      error => {
        console.error('Error fetching recipes:', error);
      }
    );
  }
  togglePipe() {
    this.applyPipe = !this.applyPipe;
  }
}
