import "./App.css";
import Testpropsandstate from "./components/props_e_usestate/Greetings/Greetings";
import { ThemeSwitcher } from "./components/context/Themeswitcher";
import { Fragment } from "react/jsx-runtime";
import { ThemeProvider } from "./components/context/Themeprovider";
import { TodoList } from "./components/reducer/Todolist";
import { TodoProvider } from "./components/reducer/Todocontext";

const App = () => {
  return (
    <Fragment>
      {/* inserisci i componenti che vuoi visualizzare qui */}
    </Fragment>
  );
};

export default App;
