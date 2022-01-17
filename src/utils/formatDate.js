const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth()+1;
    const year = d.getFullYear();
   // console.log({day, month, year});
   console.log('checking diff');

    return [day, month, year].join('-');
}

export default formatDate;