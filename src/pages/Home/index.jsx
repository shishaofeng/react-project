import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to={"/About"}>
        <span>我是Home页面</span>
      </Link>
    </div>
  );
}
export default Home;
