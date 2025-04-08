// TodoContext.tsx
import { createContext, useReducer, ReactNode } from 'react';
import { reducer, initialState} from './reducer';
import { Action, State } from './types';
interface TodoContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}
export const TodoContext = createContext<TodoContextType | undefined>(undefined);
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
