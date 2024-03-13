const handleEnterPress = async (word, setData, rowData, setRowData, currRow, setCurrRow, turkishChars) => {

    if (rowData[4] === "") {
        return;
    } else {
        try {
            const response = await fetch("https://sozluk.gov.tr/gts?ara=" + encodeURI(rowData.join('').toLocaleLowerCase("tr")));

            const result = await response.json();
            if (result.error) {
                console.warn("Sonuç bulunamadı. Lütfen geçerli bir kelime giriniz.");
                return;
            }
        } catch (error) {
            console.error("API ile iletişim hatası:", error);
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

    const result = rowData.map((char, index) => {
        const turkishCharIndex = turkishChars.findIndex(tc => tc.char === char);

        if (foundedArr[index] === char) {
            turkishChars[turkishCharIndex].color = 'green';
            return { char, color: 'green' };
        } else {
            if (unFoundedArr.includes(char)) {
                unFoundedArr.splice(unFoundedArr.indexOf(char), 1);
                turkishChars[turkishCharIndex].color = 'yellow';
                return { char, color: 'yellow' };
            } else {
                turkishChars[turkishCharIndex].color = 'gray';
                return { char, color: 'gray' };
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
    const newCurrRow = currRow < 4 ? currRow + 1 : 4;
    setCurrRow(newCurrRow);
};

export { handleEnterPress };