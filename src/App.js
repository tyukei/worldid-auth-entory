import React from 'react';
import './App.css';
import WorldIDVerification from './WorldIDVerification'; // 作成したコンポーネントをインポート

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>World ID Verification</h1>
        <WorldIDVerification /> 
      </header>
    </div>
  );
}

export default App;
