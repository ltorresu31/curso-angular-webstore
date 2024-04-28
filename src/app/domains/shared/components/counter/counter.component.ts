import {Component, Input, signal, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);

  constructor() {
    console.log('Constructor ');
    console.log('-'.repeat(10));
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges ');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }
  ngOnInit(){
    console.log('ngOnInit ');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration)
    console.log('message => ', this.message)
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething(){
    console.log('doSomething');
  }
}
