import { useEffect } from "react";
import Count from "./components/count";
import requst from "./utils/request";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    requst({ url: "api/get/news", methods: "get", params: {} }).then(
      ({ data }) => {
        console.log(data);
      }
    );
  }, []);

  return (
    <div className="App">
      <Count></Count>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
