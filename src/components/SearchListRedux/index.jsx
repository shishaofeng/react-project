import { useReducer } from "react";
import { nanoid } from "nanoid";
import { searchListReducer } from "../../redux/reducers";
import { ADDLIST, MINUSLIST } from "../../redux/constant";
import "./index.css";
function SearchList() {
  const [list, dispatch] = useReducer(searchListReducer, []);
  return (
    <div>
      <h1>列表页--useReducer--版本</h1>
      <div className="search">
        <input
          type="text"
          name=""
          id=""
          onKeyUp={(e) => {
            if (e.key === "Enter" && e.target.value) {
              dispatch({
                type: ADDLIST,
                payload: { text: e.target.value, id: nanoid() },
              });
            }
          }}
        />
      </div>

      <ul className="search-list">
        {list.map((item) => {
          return (
            <li key={item.id}>
              <button
                onClick={() => {
                  dispatch({
                    type: MINUSLIST,
                    payload: item,
                  });
                }}
              >
                删除
              </button>
              &nbsp;
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchList;
