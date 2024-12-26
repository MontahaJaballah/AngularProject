import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category-qp',
  templateUrl: './products-category-qp.component.html',
  styleUrls: ['./products-category-qp.component.css']
})
export class ProductsCategoryQPComponent implements OnInit {

  id: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
      this.id = this.route.snapshot.queryParamMap.get("id");
      console.log(this.route.snapshot.queryParamMap.get("id"));
  }

}
