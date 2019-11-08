import React from 'react';

const Display = (props) => {
  return (
    <div>
      <h2>Display</h2>
      <p>Strike: {props.atBatStats.strike}</p>
      <p>Ball: {props.atBatStats.ball}</p>
    </div>
  )
}

export default Display