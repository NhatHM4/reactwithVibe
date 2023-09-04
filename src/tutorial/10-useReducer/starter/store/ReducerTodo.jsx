const initState = {
  todoList: [],
  todoInput: "",
};

const CHANGE_INPUT = "changeInput";
const ADD = "add";
const UPDATE = "update"
const PREPARE_UPDATE= 'prepare_update'

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };

    case PREPARE_UPDATE:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD:
      return {
        ...state,
        todoList: [...state.todoList,action.payload]
      }
    case UPDATE:
      let newArr = state.todoList.map((item, index) => {
        if (index === action.payload.id) {
          return action.payload.value;
        } else {
          return item;
        }
      });
      return {
        ...state,
        todoList: newArr
      }
    default:
      throw new Error("Invalid reducer");
  }
};

export { reducer, ADD, CHANGE_INPUT, UPDATE,PREPARE_UPDATE, initState };
