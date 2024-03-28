const handleEnterPress = async (word, setData, rowData, setRowData, currRow, setCurrRow, turkishChars, setNotificationMessage, setGameOver, setSuccess, isLoading, setIsLoading, userStats, setUserStats) => {

    if (rowData[4] === "") {
        return;
    } else {
        try {
            setIsLoading(true);
            const response = await fetch("https://sozluk.gov.tr/gts?ara=" + encodeURI(rowData.join('').toLocaleLowerCase("tr")));

            const result = await response.json();
            if (result.error) {
                setNotificationMessage("GEÇERSİZ KELİME");
                return;
            }
        } catch (error) {
            setNotificationMessage("İnternet bağlantınızı kontrol ediniz.");
            return;
        } finally {
            setIsLoading(false);
        }
    }

    const foundedArr = ["", "", "", "", ""];
    const unFoundedArr = [];

    rowData.forEach((char, index) => {
        if (word[index] === char) {
            foundedArr[index] = char;
        } else {
            unFoundedArr.push(word[index]);
        }
    });

    // Keyboard ve Wordle Renkleri:
    const result = rowData.map((char, index) => {
        const turkishCharIndex = turkishChars.findIndex(tc => tc.char === char);

        if (foundedArr[index] === char) {
            turkishChars[turkishCharIndex].color = '#6AAA64';
            return { char, color: '#6AAA64' };
        } else {
            if (unFoundedArr.includes(char)) {
                unFoundedArr.splice(unFoundedArr.indexOf(char), 1);
                if (turkishChars[turkishCharIndex].color === '#6AAA64') {
                    turkishChars[turkishCharIndex].color = '#6AAA64';
                } else {
                    turkishChars[turkishCharIndex].color = '#C9B458';
                }
                return { char, color: '#C9B458' };
            } else {
                if (turkishChars[turkishCharIndex].color === '#6AAA64') {
                    turkishChars[turkishCharIndex].color = '#6AAA64';
                }
                else if (turkishChars[turkishCharIndex].color === '#C9B458') {
                    turkishChars[turkishCharIndex].color = '#C9B458';
                } else {
                    turkishChars[turkishCharIndex].color = '#787C7E';
                }
                return { char, color: '#787C7E' };
            }
        }
    });

    // set main screen data: // 
    setData((prevData) => {
        const newData = [...prevData];
        for (let i = 0; i < result.length; i++) {
            newData[currRow][i].color = result[i].color;
        }
        return newData;
    });

    // Row datayı sıfırla: //
    let newRowData = ["", "", "", "", ""];
    setRowData(newRowData);

    // Alt satıra in: //
    const newCurrRow = currRow < 6 ? currRow + 1 : 6;
    setCurrRow(newCurrRow);

    // Satırda herkes yeşil mi ?? O zaman bitirrr
    const rowGreeen = result.every(char => char.color === '#6AAA64');

    const newScore = userStats.gamesWin.reduce((totalScore, winCount) => {
        return totalScore + (6 - winCount) * 10;
    }, 0);

    if (rowGreeen) {
        setSuccess(true);

        const updatedUserStats = {
            gamesPlayed: userStats.gamesPlayed + 1,
            gamesWin: [...userStats.gamesWin, currRow],
            totalScore: newScore + (6 - currRow) * 10,
            series: userStats.series + 1,
            bestSeries: Math.max(userStats.bestSeries || 0, userStats.series + 1)
        };
        if (updatedUserStats.series > userStats.bestSeries) {
            updatedUserStats.bestSeries = updatedUserStats.series;
        }
        setUserStats(updatedUserStats);
        localStorage.setItem('userStats', JSON.stringify(updatedUserStats));
        return;
    }

    // Satır tamamlandığında oyunun durumunu kontrol et
    const allGreen = turkishChars.every(tc => tc.color === '#6AAA64');
    if (newCurrRow === 6 && !allGreen) {
        setGameOver(true);
        const updatedUserStats = {
            gamesPlayed: userStats.gamesPlayed + 1,
            gamesWin: userStats.gamesWin,
            totalScore: newScore,
            series: 0,
            bestSeries: Math.max(userStats.bestSeries || 0, 0),
        };
        setUserStats(updatedUserStats);
        localStorage.setItem('userStats', JSON.stringify(updatedUserStats));
        return;
    }
};

export { handleEnterPress };