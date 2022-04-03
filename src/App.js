import { useState } from "react";
import "./App.css";
import ListNicknames from "./ListNicknames";

function App() {
  const [order, setOrder] = useState("ASC");
  const handleClick = (a) => {
    setOrder(a);
  };
  return (
    <div>
      <ListNicknames
        names={[
          "Triviño TI",
          "Homer Dev",
          " ",
          " Ragnar Front",
          "Loki UX",
          " ",
        ]}
        order={order}
      />
      <button onClick={() => handleClick("ASC")}>ASC</button>
      <button onClick={() => handleClick("DESC")}>DESC</button>
    </div>
  );
}

export default App;
