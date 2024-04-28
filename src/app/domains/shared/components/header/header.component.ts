import {Component, inject, signal} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {CartService} from "@shared/services/cart.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
}
