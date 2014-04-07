var unitMarkerArray = [];
var unitCurArray = [];
var mapUnitsFlag = true;
var markers = {};
var currentId = 0;
var id;
var markerLoc;
var markerLoc2;
var map;
var watchId;
var mapLoad = true;
var geoLoad = true;

var curPosition;
var mapLoad = true;
var myOptions;
var serviceUrl = 'http://michb.net/resp/gpsApp/WebService.asmx/';

var recordTemplate;
var record;

var uniqueId = function () {
    return ++currentId;
}



//$(function () {
//  //  alert("ready");
//    // Handler for .ready() called.
//   // navigator.geolocation.getCurrentPosition(callbackNew);
   

    
//});
//function callbackInit(position) {
//    var lat = position.coords.latitude;
//    var lon = position.coords.longitude;
//    //   alert(lat);
//    //  alert(lon);
//    $('#latitude').html(lat);
//    $('#longitude').html(lon);
//    // document.getElementById('latitude').innerHTML = lat;
//    //  document.getElementById('longitude').innerHTML = lon;

//    var latLong = new google.maps.LatLng(lat, lon);

//    var image = new google.maps.MarkerImage(
//                                 'marker-images/' + 'curUnit.jpg',
//                                 new google.maps.Size(32, 37),
//                                 new google.maps.Point(0, 0),
//                                 new google.maps.Point(16, 37)
//                                 );

//    var myOptions = {
//        center: latLong,
//        icon: image,
//        zoom: 10,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    };

//    map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

//    id = uniqueId(); // get new id
//    //var marker = new google.maps.Marker({ // create a marker and set id
//    markerLoc = new google.maps.Marker({ // create a marker and set id
//        id: id,
//        position: latLong,
//        icon: image,
//        map: map
//        //  draggable: true,
//      //  animation: google.maps.Animation.DROP
//    });

//    unitCurArray.push(markerLoc);

//    var now = new Date();
//    // alert(now);
//    var nowFormatted = formatDateJson(now);
//    console.log('Location Refreshed: ' + nowFormatted);

//    $('#locationTimerCaption').html('Location Refreshed: ' + nowFormatted);
//    blink('#locationTimerCaption');
//    //doInitialize();
//    doInitialize();
//}


function blink(selector) {
    $(selector).fadeOut('slow', function () {
        $(this).fadeIn('slow', function () {
           // blink(this);
            $(this).fadeIn('slow', function () {
                stopblink(this);
            });
        });
    });
}

function stopblink() {

}



function showNewIncident() {
    $("#enter-incident").modal("show");
}

function doInitialize() {
    //geoloc();

    DoLocationTimer(15000);

 
    //DoLocationTimer(30000);
  //  DoIncidentTimer(20000);
  //  DoUnitsTimer(240000);
 //   DoUnitsTimerReportIn(300000)
 //  getCurLocation();

   
}




    function formatDateJson(d) {

        var pMonth = 1 * d.getMonth() + 1;
        var pDay = d.getDate();
        var pYear = d.getFullYear();
        var pHours = d.getUTCHours();
        var pMin = d.getMinutes();
        var pSec = d.getSeconds();

        if ((pMin.toString()).length == 1) {
            pMin = "0" + pMin.toString();
        }

        if ((pSec.toString()).length == 1) {
            pSec = "0" + pSec.toString();
        }

        var t = (1 * d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear() + "  " + d.getUTCHours() + ":" + pMin + ":" + pSec;
        return t;
    }

    function getCurLocation() {
        navigator.geolocation.getCurrentPosition(callbackNew);

    }
    

    function callbackNew(position) {
        
        if (unitCurArray.length > 0) {
            for (var i = 0; i < unitCurArray.length; i++) {
                unitCurArray[i].setMap(null);
            }
            unitCurArray.length = 0;
        }
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
     //   alert(lat);
        //  alert(lon);
        $('#latitude').html(lat);
        $('#longitude').html(lon);
        var latLong = new google.maps.LatLng(lat, lon);

        var image = new google.maps.MarkerImage(
                                             'curUnit.jpg',
                                             new google.maps.Size(32, 37),
                                             new google.maps.Point(0, 0),
                                             new google.maps.Point(16, 37)
                                             );

      
        if (mapLoad == true) {
            var myOptions = {
                center: latLong,
                icon: image,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
            markerLoc = new google.maps.Marker({ // create a marker and set id
               // id: id,
                position: latLong,
                icon: image,
                map: map
                //  draggable: true,
              //  animation: google.maps.Animation.DROP
            });
            doInitialize();
         //   getUnitsInField();
         //   getLocateIncidentsCall();
            SaveMainCall('2');
            mapLoad = false;
        }
        else {
            //   id = uniqueId(); // get new id
            //var marker = new google.maps.Marker({ // create a marker and set id
            markerLoc = new google.maps.Marker({ // create a marker and set id
              //  id: id,
                icon: image,
                position: latLong,
                map: map
                //  draggable: true,
               // animation: google.maps.Animation.DROP
            });

        }
      //  markers[id] = markerLoc; // cache created marker to markers object with id as its key
      //  return marker;

        unitCurArray.push(markerLoc);
      //  var id = uniqueId();
      //  var markerLoc = new google.maps.Marker({
      //      id: id,
      //      position: latLong
      //  });
      //  markers[id] = marker;
      //  markerLoc.setMap(map);
      ////  map.setZoom(8);
      //  map.setCenter(markerLoc.getPosition());

        var now = new Date();
        // alert(now);
        var nowFormatted = formatDateJson(now);
        console.log('Location Refreshed: ' + nowFormatted);

        $('#locationTimerCaption').html('Location Refreshed: ' + nowFormatted);
        blink('#locationTimerCaption');
        
    }


    function formatDateJson(d) {

        var pMonth = 1 * d.getMonth() + 1;
        var pDay = d.getDate();
        var pYear = d.getFullYear();
        var pHours = d.getUTCHours();
        var pMin = d.getMinutes();
        var pSec = d.getSeconds();

        if ((pMin.toString()).length == 1) {
            pMin = "0" + pMin.toString();
        }

        if ((pSec.toString()).length == 1) {
            pSec = "0" + pSec.toString();
        }

        var t = (1 * d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear() + "  " + d.getUTCHours() + ":" + pMin + ":" + pSec;
        return t;
    }

    function clearOverlays() {
        for (var i = 0; i < unitMarkerArray.length; i++) {
            unitMarkerArray[i].setMap(null);
        }
        unitMarkerArray.length = 0;
    }

//-------------------------------------------------

    //var start_stop_btn, wpid = false, map, z, op, prev_lat, prev_long, min_speed = 0, max_speed = 0, min_altitude = 0, max_altitude = 0, distance_travelled = 0, min_accuracy = 150, date_pos_updated = "", info_string = "";
    var start_stop_btn, wpid = false, map, z, op, prev_lat, prev_long, min_speed = 0, max_speed = 0, min_altitude = 0, max_altitude = 0, distance_travelled = 0, min_accuracy = 300000, date_pos_updated = "", info_string = "";
    // This function just adds a leading "0" to time/date components which are <10 (because there is no cross-browser way I know of to do this using the date object)
    function format_time_component(time_component) {
        if (time_component < 10)
            time_component = "0" + time_component;
        else if (time_component.length < 2)
            time_component = time_component + "0";

        return time_component;
    }

    // This is the function which is called each time the Geo location position is updated
    function geo_success(position) {
        start_stop_btn.innerHTML = "Stop"; // Set the label on the start/stop button to "Stop"

        info_string = "";
        var d = new Date(); // Date object, used below for output messahe
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();

        var current_datetime = format_time_component(h) + ":" + format_time_component(m) + ":" + format_time_component(s);

        // Check that the accuracy of our Geo location is sufficient for our needs
        if (position.coords.accuracy <= min_accuracy) {
            // We don't want to action anything if our position hasn't changed - we need this because on IPhone Safari at least, we get repeated readings of the same location with 
            // different accuracy which seems to count as a different reading - maybe it's just a very slightly different reading or maybe altitude, accuracy etc has changed
            if (prev_lat != position.coords.latitude || prev_long != position.coords.longitude) {
                if (position.coords.speed > max_speed)
                    max_speed = position.coords.speed;
                else if (position.coords.speed < min_speed)
                    min_speed = position.coords.speed;

                if (position.coords.altitude > max_altitude)
                    max_altitude = position.coords.altitude;
                else if (position.coords.altitude < min_altitude)
                    min_altitude = position.coords.altitude;


                prev_lat = position.coords.latitude;
                prev_long = position.coords.longitude;


                info_string = "Current positon: lat=" + position.coords.latitude + ", long=" + position.coords.longitude + " (accuracy " + Math.round(position.coords.accuracy, 1) + "m)<br />Speed: min=" + (min_speed ? min_speed : "Not recorded/0") + "m/s, max=" + (max_speed ? max_speed : "Not recorded/0") + "m/s<br />Altitude: min=" + (min_altitude ? min_altitude : "Not recorded/0") + "m, max=" + (max_altitude ? max_altitude : "Not recorded/0") + "m (accuracy " + Math.round(position.coords.altitudeAccuracy, 1) + "m)<br />last reading taken at: " + current_datetime;

                $('#txt_unitId').html('1');
                $('#txt_lat').html(position.coords.latitude);
                $('#txt_long').html(position.coords.longitude);
                $('#txt_accuracy').html(position.coords.accuracy);
                $('#txt_min_speed').html(min_speed);
                $('#txt_max_speed').html(max_speed);
               


                curPosition = position;
                // doMap(position);
                if (geoLoad == true)
                {
                    geoLoad = false;
                    doMap(curPosition);
                }

            }
        }
        else
            info_string = "Accuracy not sufficient (" + Math.round(position.coords.accuracy, 1) + "m vs " + min_accuracy + "m) - last reading taken at: " + current_datetime;

        if (info_string)
            op.innerHTML = info_string;
    }

    // This function is called each time navigator.geolocation.watchPosition() generates an error (i.e. cannot get a Geo location reading)
    function geo_error(error) {
        switch (error.code) {
            case error.TIMEOUT:
                op.innerHTML = "Timeout!";
                break;
        };
    }


    function get_pos() {
        // Set up a watchPosition to constantly monitor the geo location provided by the browser - NOTE: !! forces a boolean response
        // We  use watchPosition rather than getPosition since it more easily allows (on IPhone at least) the browser/device to refine the geo location rather than simply taking the first available position
        // Full spec for navigator.geolocation can be foud here: http://dev.w3.org/geo/api/spec-source.html#geolocation_interface

        // First, check that the Browser is capable
        if (!!navigator.geolocation)
            wpid = navigator.geolocation.watchPosition(geo_success, geo_error, { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 });
        else
            op.innerHTML = "ERROR: Your Browser doesnt support the Geo Location API";
    }


    // Initialiser: This will find the output message div and set up the actions on the start/stop button
    function init_geo() {
        op = document.getElementById("output"); // Note the op is defined in global space and is therefore globally available

        if (op) {
            start_stop_btn = document.getElementById("geo_start_stop");

            if (start_stop_btn) {
                start_stop_btn.onclick = function () {
                    if (wpid) // If we already have a wpid which is the ID returned by navigator.geolocation.watchPosition()
                    {
                        start_stop_btn.innerHTML = "Start";
                        navigator.geolocation.clearWatch(wpid);
                        wpid = false;
                    }
                    else // Else...We should only ever get here right at the start of the process
                    {
                        start_stop_btn.innerHTML = "Aquiring Geo Location...";
                        get_pos();
                    }

                    getCurLocation();
                }
                start_stop_btn.click();

            }
            else
                op.innerHTML = "ERROR: Couldn't find the start/stop button";
        }
    }

    // Initialise the whole system (above)
    

  //  alert("let's go!");
    window.onload = function () {
      //  alert("let's go!");
      //  window.onload = init_geo;
        init_geo();
      //  autoRefresh(250000);
    }

//----------------------------------------------------------


    $(function () {
        getGPSStubCall(0);
      //  DoLocationTimer(20000);
    });

    //function callbackInit(position) {
    //    doMap(position);

    //}

    function DoLocationTimer(interval_span) {
        locationTimerCurInterval = interval_span;
        clearInterval(locationTimer);
        locationTimer = setInterval("doMap()", interval_span);
    }

    function doMap() {
        var position = curPosition;

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        $('#latitude').html(lat);
        $('#longitude').html(lon);

        var latLong = new google.maps.LatLng(lat, lon);

        var image = new google.maps.MarkerImage(
                                     'curUnit.jpg',
                                     new google.maps.Size(32, 37),
                                     new google.maps.Point(0, 0),
                                     new google.maps.Point(16, 37)
                                     );

        if (mapLoad == true) {
            myOptions = {
                center: latLong,
                icon: image,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
            mapLoad = false;
        }
        else {
            var zoomLevel = map.getZoom();
            myOptions = {
                center: latLong,
                icon: image,
                zoom: zoomLevel
              //  mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        }

      //  map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

        //  id = uniqueId(); // get new id
        //var marker = new google.maps.Marker({ // create a marker and set id
        markerLoc = new google.maps.Marker({ // create a marker and set id
            //    id: id,
            position: latLong,
            icon: image,
            map: map
            //  draggable: true,
         //   animation: google.maps.Animation.DROP
        });


        unitCurArray.push(markerLoc);
        var now = new Date();
        // alert(now);
        var nowFormatted = formatDateJson(now);
        console.log('Location Refreshed: ' + nowFormatted);

        $('#locationTimerCaption').html('Location Refreshed: ' + nowFormatted);
        blink('#locationTimerCaption');

        SaveMainCall('1');

      //  doInitialize();
        //doInitialize();
        // doInitialize();
    }



    function getGPSStubCall(id) {

       // Showloading('show');

        var param = id;
        $.ajax(
                {
                    type: 'POST',
                    url: serviceUrl + 'getGPSStub',
                    data: '{\'recordId\':\'' + param + '\'}',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    failure: DoFail,
                    success: getGPSStubSuccess
                });

     //   Showloading('hide');

    }

    function getGPSStubSuccess(response) {

        obj = response.d;

        var servers = obj[0];
        if (obj.length != 0) {
            // RecordTemplate = item;
            recordTemplate = servers;
        }
          //  var tag = '#index_' + key;

    }

    function DoFail() {

    }
    
    function SaveMainCall(code) {

        if (typeof recordTemplate != "undefined") {

        var record = {};

        $.each(recordTemplate, function (key, val) {
            var tag = '#txt_' + key;

            record[key] = $(tag).html();

        });
        //
     //   var test = record;
        record.id = 0;
        record.code = code;

 
        var param = JSON.stringify({ "record": record })


        $.ajax({
            type: "POST",
            url: serviceUrl + 'SaveGPS',
            data: param,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SaveGPSSuccess,
            error: DoFail

        });

        }

    }
    function SaveGPSSuccess() {
    }
    
    