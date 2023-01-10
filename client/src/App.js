import { Home } from "./Home";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./Navbar";

import Navbar2 from "./Navbar2";
import { MyWork } from "./MyWork";
import { About } from "./About";

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
        <Navbar2 />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Work">
              <MyWork />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// const Body = styled.div`
//   background-color: var(--peach);
// `;
