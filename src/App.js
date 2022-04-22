import { useEffect } from "react";
import Count from "./components/Count";
import SearchList from "./components/SearchList";
import SearchListRedux from "./components/SearchListRedux";
import requst from "./utils/request";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await requst({
        url: "api/get/news",
        methods: "get",
        params: {},
      });

      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Count name="shishaofeng">hello</Count>
      <SearchList></SearchList>
      <SearchListRedux></SearchListRedux>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
