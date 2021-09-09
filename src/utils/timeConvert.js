function timeConvert(unixtime) {

    var date = new Date(unixtime * 1000);


    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2) day = '0' + day;



    var hours = date.getHours();

    var minutes = "0" + date.getMinutes();

    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = `${month}/${day}/${year}` + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime

}


export default timeConvert;