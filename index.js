function superbowlWin(record) {
    let finder = record.find(obj => obj.result === 'W')
    console.log(finder)
    if (finder) {
        return finder.year;
    }
}


// will loop to array 
// will find the first element that matches the description