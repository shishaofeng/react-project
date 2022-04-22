import { useState } from "react";
import { nanoid } from "nanoid";
import "./index.css";
function SearchList() {

  let [list, setList] = useState([]);

  // 直接使用 需要return 一个方法
  const deleteCur = (id) => {
    return () => {
      setList(list.filter((item) => item.id !== id));
    };
  };
  return (
    <div>
      <h1>列表页--useState--版本</h1>
      <div className="search">
        <input
          type="text"
          name=""
          id=""
          onKeyUp={(e) => {
            if (e.key === "Enter" && e.target.value) {
              setList([{ text: e.target.value, id: nanoid() }, ...list]);
            }
          }}
        />
      </div>

      <ul className="search-list">
        {list.map((item) => {
          return (
            <li key={item.id}>
              <button onClick={deleteCur(item.id)}>删除</button> &nbsp;
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchList;
