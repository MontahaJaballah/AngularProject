import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {
  categoryId!: string;
  categoryDescription!: string;

  categories = [
    { id: '1', description: 'je suis une description de grand electromenager' },
    { id: '2', description: 'je suis une description de petit electromenager' },
    { id: '3', description: 'je suis une description de produits informatiques' },
    { id: '4', description: 'je suis une description de smartPhone' },
    { id: '5', description: 'je suis une description de TV, images et son' },
    { id: '6', description: 'je suis une description de produits voiture' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id') || '';
    const category = this.categories.find(cat => cat.id === this.categoryId);
    this.categoryDescription = category ? category.description : 'Description non disponible';
  }
}
