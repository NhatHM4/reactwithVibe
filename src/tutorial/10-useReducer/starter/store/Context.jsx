import { createContext, useReducer } from "react";
import {reducer, initState} from './ReducerTodo'

const GlobalContext = createContext()

const ProviderContext = ({children}) =>{
    const [todo,dispatch] = useReducer(reducer,initState)
    return (
        <GlobalContext.Provider value={[todo,dispatch]}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext}
export default ProviderContext