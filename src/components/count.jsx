// redux 结合react-redux 钩子使用例子
import { useSelector, useDispatch } from "react-redux";
import { addCount } from "../redux/actions";
function Count(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.addCount);

  function handleButtonClick() {
    dispatch(addCount(1));
  }
  return (
    <div>
      <div>count 的值是 {count}</div>
      <button onClick={handleButtonClick}>点击我加1</button>
    </div>
  );
}
export default Count;
