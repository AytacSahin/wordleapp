const handleDelete = (data, setData, currRow) => {

    const newData = [...data];
    const i = currRow;

    for (let j = newData[i].length - 1; j >= 0; j--) {
        if (newData[i][j].char !== "") {
            newData[i][j].char = "";
            setData(newData);
            return;
        }
    }
}

export { handleDelete };
