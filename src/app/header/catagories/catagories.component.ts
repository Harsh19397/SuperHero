import { CategorySelectService } from '../services/CategorySelect.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchCategoryService } from './FetchCategory.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {

  data;
  checkedCategory="";

  constructor(private fetchService: FetchCategoryService,
              private categorySelect: CategorySelectService) { }
  

  ngOnInit() {
    	this.fetchService.fetchData().subscribe(
			(result) => {
				this.data = result;
			},
			(err) => {
				console.log(err);
			},
		);
  }

  listResult(){
    // this.checkedCategory = this.checkedCategory;
    // console.log(this.checkedCategory);
    this.categorySelect.categorySelected.emit(this.checkedCategory);
  }
}
