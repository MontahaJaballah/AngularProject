import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
/*export class FormProductComponent {
  model = {
    id: 0,
    name: '',
    image: '',
    categoryId: 0,
    description: '',
    price: 0,
    brand: '',
    promotion: 0
  }
  onSubmit() {
    console.log('Produit soumis :', this.model);
  }*/
    export class FormProductComponent implements OnInit {
      // Liste des produits (exemple pour ajouter un produit)
      listProducts: Product[] = [];
    
      // Formulaire pour l'ajout de produit
      productForm !: FormGroup;
    
      constructor() { }
    
      ngOnInit(): void {
        this.productForm = new FormGroup({
          'name': new FormControl(null, [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern("[a-zA-Z]*")
          ]),
          'image': new FormControl(null, Validators.required),
          'categoryId': new FormControl(null, Validators.required),
          'description': new FormControl(null, [
            Validators.required,
            Validators.minLength(10)
          ]),
          'price': new FormControl(null, [
            Validators.required,
            Validators.pattern("^\d+(\.\d+)?$")
          ]),
          'brand': new FormControl(null, Validators.required),
          'promotion': new FormControl(null, [
            Validators.pattern("^(0|[1-9][0-9]?)$")
          ])
        });
      }
    
      // Méthode pour soumettre le formulaire
      onSubmit(): void {
        if (this.productForm.valid) {
          const newProduct: Product = {
            id: this.listProducts.length + 1, // Auto-incrément
            ...this.productForm.value
          };
          this.listProducts.push(newProduct);
          console.log('Product added:', newProduct);
          this.productForm.reset(); // Reset le formulaire après soumission
        }
      }
    }

