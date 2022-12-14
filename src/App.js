import { useState } from 'react';
import './App.css';

import Axios from 'axios';

function App() {
  const [generateExcuse, setGenerateExcuse] = useState('');

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`).then((res) => {
      setGenerateExcuse(res.data[0].excuse);
    });
  };

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse('party')}>Party</button>
      <button onClick={() => fetchExcuse('family')}>Family</button>
      <button onClick={() => fetchExcuse('office')}>Office</button>
      <p>{generateExcuse}</p>
    </div>
  );
}

export default App;
