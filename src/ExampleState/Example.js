import { useReducer } from "react";


function reducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.num}
        case 'decrement':
            return {count: state.count - action.num}
        default:
            throw new Error('Unknown action')
    }
}

function ExampleState() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0
    });

    return (
        <>
            <Counter 
            count={state.count} 
            onClick={() => dispatch({
                type: 'increment',
                num: 1
            })}
            name="increment" 
            />

            <Counter 
            count={state.count} 
            onClick={() => dispatch({
                type: 'decrement',
                num: 1
            })} 
            name="decrement" 
            />
        </>
    )
}

function Counter({count, onClick, name}) {
    return (
        <>
            <button onClick={onClick}>{name}</button>
            <br />
            <div>{count}</div>
        </>
    )
}

export default ExampleState;