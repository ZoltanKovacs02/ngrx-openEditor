import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeHelloText, customeIncrement } from '../state/counter.actions';
import { getHelloText } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  helloText!: string;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(getHelloText).subscribe((helloText) => {
      console.log('hello observable called');
      this.helloText = helloText;
    });
  }
  onAdd() {
    this.store.dispatch(customeIncrement({ count: +this.value }));
  }
  onChangeHelloText() {
    this.store.dispatch(changeHelloText());
  }
}
