// TodoList.tsx
import { useContext } from "react";
import { TodoContext } from "./Todocontext";

export const TodoList = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("TodoContext non disponibile");

  return (
    <ul>
      {context.state.todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button
            onClick={() =>
              context.dispatch({ type: "remove", payload: todo.id })
            }
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};
