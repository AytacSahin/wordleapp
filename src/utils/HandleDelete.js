const handleDelete = (data, setData) => {

    // TO DO: tüm üst satırların da silinmesini engelle. 

    const newData = [...data];

    for (let i = newData.length - 1; i >= 0; i--) {
        for (let j = newData[i].length - 1; j >= 0; j--) {
            if (newData[i][j].char !== "") {
                newData[i][j].char = "";
                newData[i][j].color = "";
                setData(newData);
                return;
            }
        }
    }
}

export { handleDelete };