import { useContextTodo } from "./store/hooks";
import { CHANGE_INPUT, ADD, UPDATE, PREPARE_UPDATE } from "../starter/store/ReducerTodo";
import { useRef, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

const TodoList = () => {
  const [isUpdate, setIsUpdate] = useState(false)
  const [todo, dispatch] = useContextTodo();
  const refInput = useRef()
  const refIndex = useRef(0)
  // console.log(todo);
  return (
    <div>
      <input
        value={todo.todoInput}
        placeholder="input here"
        onChange={(e) => {
          dispatch({ type: CHANGE_INPUT, payload: e.target.value });
        }}
        ref={refInput}
      />
      <button
        onClick={() => {
          if (!isUpdate){
            dispatch({ type: ADD, payload: todo.todoInput });
            dispatch({ type: CHANGE_INPUT, payload: '' });
            refInput.current.focus()
          } else {
            setIsUpdate(false)
            dispatch({ type: UPDATE, payload: {value : todo.todoInput, id: refIndex.current} });
            dispatch({ type: CHANGE_INPUT, payload: '' });
            refInput.current.focus()
          }
          
        }}
      >
        {isUpdate ? "Update" : "Add"}
      </button>
      <ul>
        {todo?.todoList?.length !== 0 &&
          todo.todoList.map((item, index) => {
            return <li key={index}>{item}<span
            onClick={() => {
              refIndex.current = index;
              dispatch({ type: PREPARE_UPDATE, payload: item });
              setIsUpdate(true)
              refInput.current.focus()
            }}
            >  <AiOutlineEdit/></span></li>;
          })}
      </ul>
    </div>
  );
};

export default TodoList;
