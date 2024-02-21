const handlePress = (data, setData, rowData, setRowData, ch, word) => {
    const newData = [...data];
    let newRowData = [...rowData];

    for (let i = 0; i < newData.length; i++) {
        for (let j = 0; j < newData[i].length; j++) {
            if (newData[i][j].char === "") {
                newData[i][j].char = ch;

                // Clear the previous characters in the same row
                for (let k = 0; k < newRowData.length; k++) {
                    if (k !== j) {
                        newRowData[k] = "";
                    }
                }

                newRowData[j] = ch;

                if (newRowData[4] !== "") {
                    console.log("RowData is filled:", newRowData);
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

export { handlePress };
