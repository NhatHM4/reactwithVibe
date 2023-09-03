import { useReducer, useRef } from "react";

const ADD = "add";
const DELETE = "delete";
const CHANGE_NAME = "change";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
      break;

    case DELETE:
      let arr = [...state];
      return arr.filter((item) => item != action.payload);
      break;

    default:
      break;
  }
};

const reducerName = (state, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return action.payload;

    default:
      return "";
  }
};

const App = () => {
const inputRef = useRef();
  const [todoList, dispatch] = useReducer(reducer, []);
  const [name, dispatchName] = useReducer(reducerName, "");
  return (
    <div>
      <h3>Todo</h3>
      <input
      ref={inputRef}
        placeholder="input here"
        onChange={(e) => {
          dispatchName({ type: CHANGE_NAME, payload: e.target.value });
        }}
        value={name}
      />
      <button
        onClick={() => {
          dispatch({ type: ADD, payload: name });
          dispatchName({ type: CHANGE_NAME, payload: "" });
          inputRef.current.focus()
        }}
      >
        {" "}
        Addd
      </button>
      <ul>
        {todoList.length !== 0 &&
          todoList.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <span
                  onClick={() => {
                    dispatch({ type: DELETE, payload: item });
                  }}
                >
                  {" "}
                  &times;
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
