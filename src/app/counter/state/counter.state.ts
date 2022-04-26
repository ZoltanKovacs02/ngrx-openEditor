export interface CounterState {
  counter: number;
  helloText:string;
}

export const inicialState: CounterState = {
  counter: 0,
  helloText:'hello',
};
