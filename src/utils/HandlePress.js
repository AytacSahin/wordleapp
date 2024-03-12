const handlePress = (data, setData, rowData, setRowData, ch, word, turkishChars, setTurkishChars) => {
    const newData = [...data];
    let newRowData = [...rowData];

    for (let i = 0; i < newData.length; i++) {
        for (let j = 0; j < newData[i].length; j++) {
            if (newData[i][j].char === "") {
                newData[i][j].char = ch;

                newRowData[j] = ch;

                if (newRowData[4] !== "") {
                    controlRowData(i, newRowData, word, setData, turkishChars, setTurkishChars);
                    // Reset rowData
                    newRowData = ["", "", "", "", ""];
                }
                console.log("newRowData", newRowData);
                setData(newData);
                setRowData(newRowData);
                return;
            }
        }
    }
};

const controlRowData = (rowIndex, rowData, word, setData, turkishChars, setTurkishChars) => {
    const foundedArr = ["", "", "", "", ""];
    const unFoundedArr = [];

    rowData.forEach((char, index) => {
        if (word[index] === char) {
            foundedArr[index] = char;
        } else {
            unFoundedArr.push(word[index]);
        }
    });

    const result = rowData.map((char, index) => {
        if (foundedArr[index] === char) {
            return { char, color: 'green' }
        } else {
            if (unFoundedArr.includes(char)) {
                unFoundedArr.splice(unFoundedArr.indexOf(char), 1);
                return { char, color: 'yellow' }
            } else {
                return { char, color: '' }
            }
        }
    });

    // set main screen data: // 
    setData((prevData) => {
        const newData = [...prevData];
        for (let i = 0; i < result.length; i++) {
            newData[rowIndex][i].color = result[i].color;
        }
        return newData;
    });

    // set keyboard colors: //
}

export { handlePress };

