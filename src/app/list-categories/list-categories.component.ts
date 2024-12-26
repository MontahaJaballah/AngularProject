import { Component } from '@angular/core';
import { Categorie } from '../models/categories';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categories : Categorie[] = [
    {"id":1,"title":"Grand électroménager",
      "image":"assets/images/categorie_electromenager.jpg", "description":"je suis une description de grand electromenager",
      "available":true},
      {"id":2,"title":"Petit électroménager",
      "image":"assets/images/categorie_petit_electromenager.jpg", "description":"je suis une description de petit electromenager",
      "available":true},
      {"id":3,"title":"Produits informatiques",
      "image":"assets/images/categorie_produits_informatiques.jpg", "description":"je suis une description de produits informatiques",
      "available":true},
      {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
      "description":"je suis une description de smartPhone", "available":true},
      {"id":5,"title":"TV, images et son",
      "image":"assets/images/categorie_tv_image_son.jpg", "description":"je suis une description de TV, images et son",
      "available":true},
      {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
      "description":"je suis une description de produits voiture","available":false},
  ]

  search: string = '';
  affichedesc(description: string): void {
    alert(description);
  }
  filteredCategories() {
    return this.categories.filter(categorie => categorie.title.toLowerCase().includes(this.search.toLowerCase()));
  }
  
 
}
