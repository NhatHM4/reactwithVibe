import { useContext } from "react";
import { GlobalContext } from "./Context";

const useContextTodo = ()=> {
   return useContext(GlobalContext)
} 

export {useContextTodo}
