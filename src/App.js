import { useEffect, useState } from 'react';
import './App.css';

import CharacterGrid from './components/CharacterGrid.js';
import TurkishKeyboard from './components/TurkishKeyboard.js';
import Header from './components/Header.js';
import Notification from './components/Notification.js';

import { MainContext } from './Context';
import { handlePress } from './utils/HandlePress.js';
import { handleEnterPress } from './utils/HandleEnterPress.js';
import { handleDelete } from './utils/HandleDelete.js';
import { turkishKeyboardChars as initialTurkishChars } from './data/turkishKeyboardChars.js';
import { screenData } from './data/screenData.js';
import { words } from '../src/data/gameData.js';

import GameOver from './components/GameOver.js';
import Success from './components/Success.js';
import IsLoadingPage from './components/IsLoadingPage.js';

function App() {

  const [turkishChars, setTurkishChars] = useState(initialTurkishChars);
  const [data, setData] = useState(screenData);
  const [rowData, setRowData] = useState(["", "", "", "", ""]);
  const [currRow, setCurrRow] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userStats, setUserStats] = useState(JSON.parse(localStorage.getItem('userStats')) || { gamesPlayed: 0, gamesWin: [], totalScore: 0, series: 0, bestSeries: 0 });

  const [currentWord, setCurrentWord] = useState(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
  });

  useEffect(() => {
    console.log(userStats)
  }, [userStats])

  useEffect(() => {
    console.log(currentWord)
  }, [currentWord])

  const onEnterPress = () => {
    handleEnterPress(
      currentWord,
      setData,
      rowData,
      setRowData,
      currRow,
      setCurrRow,
      turkishChars,
      setNotificationMessage,
      setGameOver,
      setSuccess,
      isLoading,
      setIsLoading,
      userStats,
      setUserStats
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
    setIsLoading,
    notificationMessage,
    setNotificationMessage,
    gameOver,
    setGameOver,
    userStats,
    setUserStats
  };

  return (
    <div className="">
      <MainContext.Provider value={contextData}>
        <Header />
        <CharacterGrid />
        <TurkishKeyboard />
        {notificationMessage && <Notification />}
        {isLoading && <IsLoadingPage />}
        {gameOver && <GameOver />}
        {success && <Success />}
      </MainContext.Provider >
    </div>
  );
}

export default App;
