import { EventEmitter } from '@angular/core';

export class CategorySelectService{
    
    categorySelected = new EventEmitter<string>();

}