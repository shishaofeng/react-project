import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <Link to={"/Home"}>
        <span>我是About页面</span>
      </Link>
    </div>
  );
}
export default About;
