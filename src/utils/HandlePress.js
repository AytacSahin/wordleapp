const handlePress = (data, setData, ch, currRow) => {
    const newData = [...data];
    const i = currRow;
    for (let j = 0; j < newData[i].length; j++) {
        if (newData[i][j].char === "") {
            newData[i][j].char = ch;
            setData(newData);
            return;
        }
    }
};

export { handlePress };

