
import { useState } from "react";
import Ontop from "./compenent/Ontop";
import Bench from "./compenent/Benchdisplay";
import Footer from "./compenent/Footer";
import "./App.css";
import "./compenent/Benchdisplay.css";
import "./compenent/Footer.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>         
         <Ontop />
          <Bench />
          <Footer /> 
    </>
  );
}

export default App;
