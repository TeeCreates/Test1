import { Main } from "./Main";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  const [message, setMessage] = useState("no message");

  useEffect(() => {
    fetch("/fetch-message").then((res) =>
      res
        .json()
        .then((data) => setMessage(data.message))
        .catch((e) => console.log("got error", e))
    );
  }, []);
  return (
    <Router>
      <div className="App">
        <Main />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
