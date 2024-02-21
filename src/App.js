import { useState } from 'react';
import './App.css';
import CharacterGrid from './components/CharacterGrid.js';
import TurkishKeyboard from './components/TurkishKeyboard.js';
import { MainContext } from './Context';

function App() {

  const [data, setData] = useState([
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ]);

  const onKeyPress = (char) => {
    console.log("bastım:", char)
  }

  const onDelete = (char) => {
    console.log("bastım:", char)
  }

  const contextData = {
    data,
    setData,
    onKeyPress,
    onDelete
  }

  return (
    <div className="">
      <MainContext.Provider value={contextData}>
        <CharacterGrid data={data} setData={setData} />
        <TurkishKeyboard data={data} setData={setData} />
      </MainContext.Provider >
    </div>
  );
}

export default App;
