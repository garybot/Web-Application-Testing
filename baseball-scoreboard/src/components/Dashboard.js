import React, {  useEffect } from 'react';

const Dashboard = (props) => {
  const atBatStats = props.atBatStats;
  const setAtBatStats = props.setAtBatStats;

  useEffect(() => {
    if (atBatStats.strike === 3 || atBatStats.ball === 4) {
      setAtBatStats({...atBatStats, 'strike': 0, 'ball': 0})
    }
    console.log(atBatStats);
  }, [atBatStats, setAtBatStats])

  const addStrike = () => {
    setAtBatStats({...atBatStats, 'strike': atBatStats.strike + 1});
  }

  const addBall = () => {
    setAtBatStats({...atBatStats, 'ball': atBatStats.ball + 1});
  }
  
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={addStrike}>Strike</button>
      <button onClick={addBall}>Ball</button>
    </div>
  )
}

export default Dashboard