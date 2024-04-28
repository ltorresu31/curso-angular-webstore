import { Component } from '@angular/core';
import {CurrencyPipe, UpperCasePipe} from "@angular/common";
import {ReversePipe} from "@shared/pipes/reverse.pipe";
import {TimeAgoPipe} from "@shared/pipes/time-ago.pipe";
import {HeaderComponent} from "@shared/components/header/header.component";
import {ProductComponent} from "@products/components/product/product.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CurrencyPipe,
    ReversePipe,
    TimeAgoPipe,
    UpperCasePipe,
    HeaderComponent,
    ProductComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
