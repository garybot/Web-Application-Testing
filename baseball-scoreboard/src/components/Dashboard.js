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

  const handleStrike = () => {
    setAtBatStats({...atBatStats, 'strike': atBatStats.strike + 1});
  }

  const handleBall = () => {
    setAtBatStats({...atBatStats, 'ball': atBatStats.ball + 1});
  }
  const handleFoul = () => {
    return atBatStats.strike < 2 ? handleStrike() : null;
  }
  const handleHit = () => {
    setAtBatStats({'strike': 0, 'ball': 0})
  }
  
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </div>
  )
}

export default Dashboard