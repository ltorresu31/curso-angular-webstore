import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "@shared/models/product.model";
import {CurrencyPipe, DatePipe, UpperCasePipe} from "@angular/common";
import {ReversePipe} from "@shared/pipes/reverse.pipe";
import {TimeAgoPipe} from "@shared/pipes/time-ago.pipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    DatePipe,
    ReversePipe,
    TimeAgoPipe,
    RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!:Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('click from child');
    this.addToCart.emit(this.product);
  }
}
