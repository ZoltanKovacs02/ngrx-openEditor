import { CounterState, inicialState } from './counter.state';
import { Action, createReducer, on } from '@ngrx/store';
import {
  changeHelloText,
  customeIncrement,
  decrement,
  increment,
  reset,
} from './counter.actions';
const _counterReducer = createReducer(
  inicialState,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state) => {
    return { ...state, counter: 0 };
  }),
  on(customeIncrement, (state, action) => {
    console.log(action);
    return { ...state, counter: state.counter + action.count };
  }),
  on(changeHelloText, (state, action) => {
    console.log(action);
    return { ...state, helloText: 'you pust the button' };
  })
);
export function counterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}
