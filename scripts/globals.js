function formatDateJson(pDate) {

    var dateVal = pDate;
    if (dateVal != null) {
        var date = new Date(parseFloat(dateVal.substr(6)));
        var dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        return dateString;
    }
    else {
        return "";

    }

}