import React from 'react';
import { useState } from "react"
import MyCounter from "./myCounter"


function MyComponent() {
    const [isShow, setIsShow] = useState(true)
    return (
        <>
         <div>
            <button onClick={() => setIsShow(!isShow)}>Hide Counter</button>
            {isShow ? 'Hide counter' : 'Show counter'}
         </div>
         {isShow ? <MyCounter /> : null}
        </>
    )
}

export default MyComponent