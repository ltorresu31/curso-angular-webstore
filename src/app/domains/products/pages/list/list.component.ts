import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductComponent} from "../../components/product/product.component";
import {from} from "rxjs";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  fromChild(event: any){
    console.log('Estamos en el padre.');
    console.log(event);
  }

  protected readonly from = from;
}
