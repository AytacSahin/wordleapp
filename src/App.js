import { useState } from 'react';
import './App.css';
import CharacterGrid from './components/CharacterGrid.js';
import TurkishKeyboard from './components/TurkishKeyboard.js';
import { MainContext } from './Context';
import Header from './components/Header.js';
import { handlePress } from './utils/HandlePress.js';
import { handleDelete } from './utils/HandleDelete.js';
import { turkishChars as initialTurkishChars } from './data/turkishChars.js';
import { screenData } from './data/screenData.js';

function App() {

  const [data, setData] = useState(screenData);

  const [turkishChars, setTurkishChars] = useState(initialTurkishChars);

  const [rowData, setRowData] = useState(["", "", "", "", ""]);

  const onKeyPress = (ch) => {
    handlePress(data, setData, rowData, setRowData, ch, "KALEM", turkishChars, setTurkishChars);
  }

  const onDelete = () => {
    handleDelete(data, setData);
  }

  const contextData = {
    data,
    setData,
    onKeyPress,
    onDelete,
    rowData,
    setRowData,
    turkishChars,
    setTurkishChars
  };

  return (
    <div className="">
      <MainContext.Provider value={contextData}>
        <Header />
        <CharacterGrid data={data} setData={setData} />
        <TurkishKeyboard data={data} setData={setData} />
      </MainContext.Provider >
    </div>
  );
}

export default App;
