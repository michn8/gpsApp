

var incidentTimer;
var incidentTimerCurInterval;
var locationTimer;
var locationTimerCurInterval;
var unitsTimer;
var unitTimerCurInterval;
var unitTimerReportIn;
var untiTimerReportInterval;

//function DoLocationTimer(interval_span) {
//    locationTimerCurInterval = interval_span;
//    clearInterval(locationTimer);
//    locationTimer = setInterval("getCurLocation()", interval_span);
//}


function DoIncidentTimer(interval_span) {
    incidentTimerCurInterval = interval_span;
    clearInterval(incidentTimer);
    incidentTimer = setInterval("getLocateIncidentsCall()", interval_span);
}

function DoUnitsTimer(interval_span) {
    unitTimerCurInterval = interval_span;
    clearInterval(unitsTimer);
    unitsTimer = setInterval("getUnitsInField()", interval_span);
}

function DoUnitsTimerReportIn(interval_span) {
    untiTimerReportInterval = interval_span;
    clearInterval(unitTimerReportIn);
    unitTimerReportIn = setInterval("SaveMainCall('2')", interval_span);
}


