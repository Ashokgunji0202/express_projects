import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClickIncrease = () => {
    setCount(count + 1);
  };

  const handleClickDecrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>Counter</p>
        <p>{count}</p>
        <button style={{ marginRight: '10px' }} onClick={handleClickIncrease}>+</button>
        <button style={{ marginLeft: '10px' }} onClick={handleClickDecrease}>-</button>
        <button style={{ marginLeft: '10px' }} onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
