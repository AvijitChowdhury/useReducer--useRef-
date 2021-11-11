import React from 'react';
import { useReducer, useState } from 'react';

const ReducerCount = () => {
   
    const initialState = {count: 0};
    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
    }
    const [count ,setCount] = useState(0);
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
             <h1>This is react reducer</h1>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
            
        </div>
    );
};

export default ReducerCount;