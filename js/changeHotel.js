/*4.热播/经典切换下面内容改变*/
$(document).ready(function() {
    $(".maoyan-nav").children("a").each(function(index, element) {
        $(this).mouseenter(function() {
            $($(".maoyan-nav").children("span")[index]).css("background", "green")
            $($(".maoyan-nav").children("span")[index]).siblings().css("background", "none")
            $($("#hot-list").children()[index]).css("display", "block")
            $($("#release-list").children()[index]).siblings().css("display", "none")
        })
    })
})