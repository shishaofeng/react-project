// 只用redux 使用例子
import { useState } from "react";
import { addCount } from "../redux/actions";
import store from "../redux/store";
function Count(props) {
  const [count, setCount] = useState(0);
  function handleButtonClick() {
    store.dispatch(addCount(1));
    setCount(store.getState().addCount);
  }
  return (
    <div>
      <div>count 的值是 {count}</div>
      <button onClick={handleButtonClick}>点击我加1</button>
    </div>
  );
}
export default Count;
