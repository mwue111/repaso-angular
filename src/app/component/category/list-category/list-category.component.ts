import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  listCategories:any = [];

  constructor(
    private cs: CategoryService,
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    return this.cs.getCategories()
      .subscribe((data) => {
        console.log(data);
        this.listCategories = data;
      })
  }

}
