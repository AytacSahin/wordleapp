const handleDelete = (data, setData) => {
    const newData = [...data];
    for (let i = newData.length - 1; i >= 0; i--) {
        for (let j = newData[i].length - 1; j >= 0; j--) {
            if (newData[i][j] !== "") {
                newData[i][j] = "";
                setData(newData);
                return;
            }
        }
    }
}

export { handleDelete };