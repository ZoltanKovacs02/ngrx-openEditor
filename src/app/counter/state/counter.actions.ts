import { createAction, props } from '@ngrx/store';
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customeIncrement = createAction(
  'customincrement',
  props<{ count: number }>()
);
export const changeHelloText = createAction('changeHelloText');
