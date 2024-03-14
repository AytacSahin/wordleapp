import { useEffect, useState } from 'react';
import './App.css';
import CharacterGrid from './components/CharacterGrid.js';
import TurkishKeyboard from './components/TurkishKeyboard.js';
import { MainContext } from './Context';
import Header from './components/Header.js';
import { handlePress } from './utils/HandlePress.js';
import { handleEnterPress } from './utils/HandleEnterPress.js';
import { handleDelete } from './utils/HandleDelete.js';
import { turkishKeyboardChars as initialTurkishChars } from './data/turkishKeyboardChars.js';
import { screenData } from './data/screenData.js';
import { words } from '../src/data/gameData.js';

function App() {

  const [data, setData] = useState(screenData);

  const [isLoading, setIsLoading] = useState(false);

  const [turkishChars, setTurkishChars] = useState(initialTurkishChars);

  const [rowData, setRowData] = useState(["", "", "", "", ""]);

  const [currRow, setCurrRow] = useState(0);

  const [currentWord, setCurrentWord] = useState(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
  });

  const onEnterPress = () => {
    handleEnterPress(
      currentWord,
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
    currentWord,
    setCurrentWord,
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
    setCurrRow,
    isLoading,
    setIsLoading
  };

  return (
    <div className="">
      <MainContext.Provider value={contextData}>
        <Header />
        <CharacterGrid />
        <TurkishKeyboard />
      </MainContext.Provider >
    </div>
  );
}

export default App;
