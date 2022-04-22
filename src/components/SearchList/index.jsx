import { useState } from "react";
import { nanoid } from "nanoid";
import "./index.css";
function SearchList() {
  let [list, setList] = useState([]);
  const keyUp = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setList([{ text: e.target.value, id: nanoid() }, ...list]);
    }
  };
  // 直接使用 需要return 一个方法
  const deleteCur1 = (id) => {
    return () => {
      setList(list.filter((item) => item.id !== id));
    };
  };
  // 箭头函数用法
  //   const deleteCur2 = (id) => {
  //     setList(list.filter((item) => item.id !== id));
  //   };
  return (
    <div>
      <div className="search">
        <input type="text" name="" id="" onKeyUp={keyUp} />
      </div>
      <ul className="search-list">
        {list.map((item) => {
          return (
            <li key={item.id}>
              <button onClick={deleteCur1(item.id)}>删除</button>
              {/* <button onClick={() => deleteCur2(item.id)}>删除</button> */}
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchList;
