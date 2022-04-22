import { Link, useParams } from "react-router-dom";
function Home(props) {
  console.log(props);
  const params = useParams();
  console.log(params);
  return (
    <div>
      <Link to={"/About"}>
        <span>我是Home页面</span>
      </Link>
    </div>
  );
}
export default Home;
