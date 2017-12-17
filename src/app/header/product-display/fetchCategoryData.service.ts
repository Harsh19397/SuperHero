import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { CategorySelectService } from '../services/CategorySelect.service';

@Injectable()

export class FetchCategoryDataService{
    category="mugs";
    url = "";

    constructor(private http:Http,
                private categorySelect: CategorySelectService){
            this.categorySelect.categorySelected.subscribe(
              (data: string) => this.category = data
        );
            }

    fetchData(){
         this.url = "../../assets/data/" + this.category + ".json";
         return this.http.get(this.url).map(response => response.json());
    }
}
