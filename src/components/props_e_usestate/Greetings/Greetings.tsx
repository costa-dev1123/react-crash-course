import { Fragment, useContext, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThemeContext } from "../../context/Themecontext";
interface IGreetingsProps {
  name:string;
}
const Greetings = ({name}:IGreetingsProps) => {
  const conunterState = useState(0);
  const context = useContext(ThemeContext);
  return (
    <Fragment>
      <Header />
      <div>ciao {name}, il tuo counter è: {conunterState[0]} </div>
      <div>il tema attuale è {context?.theme}</div>
      <button onClick={() => conunterState[1](conunterState[0] + 1)}>aumenta counter</button>
      <Footer />
    </Fragment>
  );
};
export default Greetings;
