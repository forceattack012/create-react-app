import { useEffect, useState } from "react";

//Mount (inital) -> Updates(re render) -> unmount
function MyCounter() {
    const [count, setCount] = useState(0)
    const [bool, setBool] = useState(false)

    useEffect(() =>{
        console.log('count changed')
        return () => console.log('cleanup count changed')
    },[count])

    useEffect(() => {
        console.log('render')
    })

    return (
        <div>
            <button onClick={() => setBool(!bool)}>Reload</button>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <p>Count : {count}</p>
        </div>
    )
}

export default MyCounter;