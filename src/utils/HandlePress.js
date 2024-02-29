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
                setData(newData);
                setRowData(newRowData);
                return;
            }
        }
    }
};

const controlRowData = (rowIndex, rowData, word, setData, turkishChars, setTurkishChars) => {
    const result = rowData.map((char, index) => {
        if (char === word[index]) {
            return { char, color: 'green' }; // Doğru karakter ve pozisyon
        } else if (word.includes(char)) {
            return { char, color: 'yellow' }; // Doğru karakter ancak yanlış pozisyon
        } else {
            return { char, color: 'red' }; // Yanlış karakter
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
