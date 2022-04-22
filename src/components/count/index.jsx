// redux 结合react-redux 钩子使用例子
import { useSelector, useDispatch } from "react-redux";
// 获取actions定义常量
import { ADDCOUNT, MINUS } from "../../redux/constant";
// 获取actions方法
import { countNumber } from "../../redux/actions";

import useWindowsWidth from "../../hooks/useWindowsWidth";

import "./index.css";

function Count(props) {
  console.log(props);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleButtonClick = (type) => {
    dispatch(countNumber({ type, payload: 1 }));
  };

  const data = useWindowsWidth();
  console.log(data);
  return (
    <div className="count">
      <h1>redux-求和案例</h1>

      <div className="content">count 的值是 {count}</div>

      <button
        className="btn"
        onClick={() => {
          handleButtonClick(MINUS);
        }}
      >
        点击我减1
      </button>

      <button
        className="btn"
        onClick={() => {
          handleButtonClick(ADDCOUNT);
        }}
      >
        点击我加1
      </button>
    </div>
  );
}
export default Count;
