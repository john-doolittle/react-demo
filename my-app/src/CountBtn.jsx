import React from 'react';

function CountBtn({ setCount, count }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  )
}

export default CountBtn;