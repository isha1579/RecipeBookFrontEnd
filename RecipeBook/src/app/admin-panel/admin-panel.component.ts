import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../dataservice.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  
  recipes: any[] = [];
  recipeOperation: any = {};
  constructor(private http: HttpClient, private dataService: DataService) { }
  getRecipes() {
    this.dataService.getData().subscribe(
      (recipes: any[]) => {
        this.recipes = recipes;
      },
      error => {
        console.error('Error fetching recipes:', error);
      }
    );
  }
  addRecipe() {
    this.http.post<any>('http://localhost:5086/api/Recipes/AddRecipe', this.recipeOperation).subscribe(
      (response) => {
        console.log('Recipe added successfully:', response);
        this.getRecipes();
      },
      error => {
        console.error('Error adding recipe:', error);
      }
    );
  }
  updateRecipe() {
    this.http.put<any>(`http://localhost:5086/api/Recipes/UpdateRecipe/${this.recipeOperation.id}`, this.recipeOperation).subscribe(
      (response) => {
        if (response && response.message === "Recipe updated successfully") {
          console.log('Recipe updated successfully:', response);
          this.getRecipes();
        } else {
          console.error('Error updating recipe:', response);
        }
      },
      error => {
        console.error('Error updating recipe:', error);
      }
    );
  }
  deleteRecipeById() {
    this.http.delete(`http://localhost:5086/api/Recipes/DeleteRecipe/${this.recipeOperation.id}`, { responseType: 'text' }).subscribe(
      (response) => {
        console.log('Response:', response);
        if (response === "Recipe deleted successfully") {
          console.log('Recipe deleted successfully:', response);
          this.getRecipes();
        } else {
          console.error('Error deleting recipe:', response);
        }
      },
      error => {
        console.error('Error deleting recipe:', error);
      }
    );
  }
}
