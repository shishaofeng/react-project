import { Link, useSearchParams } from "react-router-dom";
function About() {
  let [params] = useSearchParams();
  console.log(params.get("name"));
  return (
    <div>
      <Link to={"/Home"}>
        <span>我是About页面</span>
      </Link>
    </div>
  );
}
export default About;
