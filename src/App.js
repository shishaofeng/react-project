import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// 一般组件
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
      <div className="router-list">
        <div className="links">
          <Link to="/Home">Home</Link> &nbsp;&nbsp;
          <Link to="/About">About</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>
      </div>

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
