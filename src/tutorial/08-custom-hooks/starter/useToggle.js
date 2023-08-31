import { useState } from "react"

const useToggle = (defaulValue)=>{
    const [show, setShow] = useState(defaulValue)

    const toggle = ()=>{
        setShow(!show)
    }

    return {show, toggle}
}

export default useToggle