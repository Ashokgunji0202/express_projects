import React,{ useState } from 'react'
import Styles from './Style.module.css'



const CounterUseState = () => {
    const [count, setCount] = useState(0);

   const handleIncrement = () => {
      setCount(count + 1);
    };
    const handleDecrement = () => {
      setCount(count - 1);
    };
    const handleReset = () => {
      setCount(0);
    };
  
    return (
      <div
        style={{
          padding: '20px',
          margin: '20px',
          border: '1px solid white',
          backgroundColor: 'lightblue',
          height: '200px',
          width: '450px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          flexDirection: 'column',
        }}
      >
        <h1 style={{ textAlign: 'center', color: 'green' }}>CounterUseState</h1>
  
        <h2 style={{ color: 'black', marginBottom: '10px' }}>{count}</h2>
    
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <button className={Styles.buttonStyle} onClick={handleIncrement}>Increment</button>
          <button className={Styles.buttonStyle} onClick={() => handleDecrement()}>Decrement</button>
          <button className={Styles.buttonStyle} onClick={() => handleReset()}>Reset</button>
        </div>
      </div>
    );
  };
export default CounterUseState
