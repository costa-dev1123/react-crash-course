import { Action, State, Todo } from "./types";

export const initialState: State = { todos: [
    {
        id: 0,
        text: 'Devo fare la spesa'
    },
    {
        id: 1,
        text: 'Devo andare alla posta'
    }
] };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add':
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
      };
      return { todos: [...state.todos, newTodo] };
    case 'remove':
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
}
 