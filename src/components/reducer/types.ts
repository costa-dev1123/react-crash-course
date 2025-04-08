// types.ts
export interface Todo {
    id: number;
    text: string;
  }
  
  export type Action =
    | { type: 'add'; payload: string }
    | { type: 'remove'; payload: number };
  
  export interface State {
    todos: Todo[];
  }
  