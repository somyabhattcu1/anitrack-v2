// useLess for now
export const firstLetterCap = (text) => {
    let arr = text.split(' ');
    arr.forEach((item, index) => {
        arr[index] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
    return arr.join(' ');
};

// 2023-5-6

export const formatDate = (dateObject) => {

    const { year, month, day } = dateObject;
    if (year === null || month === null || day === null) {
        return;
    }
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;

    return `${year}-${formattedMonth}-${formattedDay}`;
}



