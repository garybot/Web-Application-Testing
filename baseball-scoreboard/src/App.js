import React, { useState } from 'react';
import './App.css';

import Dashboard from './components/Dashboard.js';
import Display from './components/Display.js';

function App() {
  const [atBatStats, setAtBatStats] = useState({'strike': 0, 'ball': 0});
  return (
    <div className="App">
      <Dashboard atBatStats={atBatStats} setAtBatStats={setAtBatStats}/>
      <Display atBatStats={atBatStats}/>
    </div>
  );
}

export default App;
