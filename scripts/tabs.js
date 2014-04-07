//TABS
var CurrentTab;

var tabContents = $(".tab_content").hide(),
    tabs = $("ul.tabs li");

tabs.first().addClass("active").show();
tabContents.first().show();

tabs.click(function () {
    var $this = $(this),
        activeTab = $this.find('a').attr('href');
    CurrentTab = activeTab;

    if (!$this.hasClass('active')) {
        $this.addClass('active').siblings().removeClass('active');
        tabContents.hide().filter(activeTab).fadeIn();
    }
    return false;
});


// alert("load");
//$(".tabs-menu a").click(function (event) {
//    event.preventDefault();
//    $(this).parent().addClass("current");
//    $(this).parent().siblings().removeClass("current");
//    var tab = $(this).attr("href");
//    $(".tab-content").not(tab).css("display", "none");
//    $(tab).fadeIn();

//    CurrentTab = tab;

//    switch (CurrentTab) {
//        case '#tab-1':
//            getAllServices();
//        case '#tab-2':
//            getAllRooms();
//        case '#tab-3':
//            getAllCareers();
//        default:
//            //   return kendo.toString(date, "F");
//    }

//});
