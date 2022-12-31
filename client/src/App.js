import { Main } from "./Main";
import { useEffect, useState } from "react";

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
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
    </div>
  );
}

export default App;
