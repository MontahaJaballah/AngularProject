import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categories';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  listProducts : Product[]=[
    {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1,
    "description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur-samsung.jpg","categoryId":1,"description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko",
    "image":"assets/images/lave_vaisselle.png", "categoryId":1,
    "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo.jpg","categoryId":4,
    "description":"", "price":1200,"brand":"OPPO","promotion":0},{"id":5, "name":"Hachoir",
      "image":"assets/images/hachoir.jpg","categoryId":2,
      "description":"","price":120,"brand":"Moulinex", "promotion":0},
      {"id":6, "name":"TV 50 LG","image":"assets/images/tv.png","categoryId":5, "description":"",
      "price":1800,"brand":"LG","promotion":0},
      ]
  categoryId !: number;
  filteredProducts: Product[] = [];
  constructor(private activatedRoute: ActivatedRoute){}
 ngOnInit() : void {
  const id = this.activatedRoute.snapshot.paramMap.get('id');  
  if (id) {
    this.categoryId = +id;
    this.filteredProducts = this.listProducts.filter(product => product.categoryId === this.categoryId);
      console.log('Filtered Products:', this.filteredProducts);
    } else {
      console.error('No category ID found in the URL');
    }
  }
  }

