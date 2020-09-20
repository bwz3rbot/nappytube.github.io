console.log("CONNECTED")

$(function () {
    $('#discord_span').click(function () {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#discord_link').text()).select();
        document.execCommand("copy");
        $temp.remove();
    })

})