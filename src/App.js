import { useEffect, useState } from 'react';
import './App.css';
import CharacterGrid from './components/CharacterGrid.js';
import TurkishKeyboard from './components/TurkishKeyboard.js';
import { MainContext } from './Context';
import Header from './components/Header.js';
import { handlePress } from './utils/HandlePress.js';
import { handleEnterPress } from './utils/HandleEnterPress.js';
import { handleDelete } from './utils/HandleDelete.js';
import { turkishChars as initialTurkishChars } from './data/turkishChars.js';
import { screenData } from './data/screenData.js';

function App() {

  const [data, setData] = useState(screenData);

  const [turkishChars, setTurkishChars] = useState(initialTurkishChars);

  const [rowData, setRowData] = useState(["", "", "", "", ""]);

  const [currRow, setCurrRow] = useState(0);

  const onEnterPress = () => {
    handleEnterPress(
      "TALİP",
      setData,
      rowData,
      setRowData,
      currRow,
      setCurrRow,
      turkishChars,
    );
  }

  const onKeyPress = (ch) => {
    handlePress(data, setData, ch, currRow);
  }

  const onDelete = () => {
    handleDelete(data, setData, currRow);
  }

  useEffect(() => {
    if (currRow >= 0 && currRow < data.length) {
      setRowData(data[currRow].map(cell => cell.char));
    }
  }, [currRow, data]);

  const contextData = {
    data,
    setData,
    onKeyPress,
    onDelete,
    onEnterPress,
    rowData,
    setRowData,
    turkishChars,
    setTurkishChars,
    currRow,
    setCurrRow
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
