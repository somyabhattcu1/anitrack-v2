// useLess for now
export const firstLetterCap = (text) => {
    if(text){
        let arr = text.split(' ');
        arr.forEach((item, index) => {
            arr[index] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
        });
        return arr.join(' ');
    }
};


export const formatDate = (dateObject) => {
    const { year, month, day } = dateObject;
    if (year === null || month === null || day === null) {
        return;
    }
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;

    return `${year}-${formattedMonth}-${formattedDay}`;
}

// 
export const formatTime = (mins) => {
    if(mins<60){
        return `${mins} mins`
    }
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${hours} hour, ${formattedMinutes} mins`;

}




// for future usecases

// export const timestampToHumanDate = (timestamp) => {
//     const milliseconds = timestamp * 1000;
//     const date = new Date(milliseconds);
//     const localDate = date.toLocaleDateString('en-US').split('/').join('-');
//     return localDate
// }
  
// export const secondsToDayTime = (seconds) => {
//     const days = Math.floor(seconds / (24 * 60 * 60));
//     const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));

//     // not needed for now
//     // const minutes = Math.floor((seconds % (60 * 60)) / 60);
//     return `${days} days, ${hours} hours`;
// }

