import {Component, inject, Input, signal} from '@angular/core';
import {ProductService} from "@shared/services/product.service";
import {Product} from "@shared/models/product.model";
import {CurrencyPipe, NgForOf, UpperCasePipe} from "@angular/common";
import {Category} from "@shared/models/category.model";
import {CartService} from "@shared/services/cart.service";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    NgForOf
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() key?: string;
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product = signal<Product | null>(null);
  category!: Category;
  cover = signal('');
  ngOnInit(){
    console.log(this.key);
    if(this.key){
      this.productService.getOne(this.key)
        .subscribe({
          next: (product) => {
            console.log(product);
            this.product.set(product);
            if(product.images.length > 0){
              this.cover.set(product.images[0])
            }
          },
          error: () => {

          }
        })
    }
  }

  changeCover(newImage: string){
    this.cover.set(newImage);
  }

  addToCart(){
    const product = this.product();
    if(product){
      this.cartService.addToCart(product);
    }
  }
}
