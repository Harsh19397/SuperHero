import { FetchCategoryDataService } from './fetchCategoryData.service';
import { Component, OnInit } from '@angular/core';
import { CategorySelectService } from '../services/CategorySelect.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  data;
  category="";

  constructor(private fetchCategoryData:FetchCategoryDataService,
              private categorySelect: CategorySelectService) {
   }

  ngOnInit() {
    this.fetchCategoryData.fetchData()
      .subscribe(
        (result) =>{
          this.data = result;
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
