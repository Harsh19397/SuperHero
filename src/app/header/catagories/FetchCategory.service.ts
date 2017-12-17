import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
 export class FetchCategoryService {
     constructor(private http:Http){}

     fetchData(){
         return this.http.get('../../assets/data/Categories.json').map(response => response.json());
     }

 }