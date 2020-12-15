$(document).ready(function() {
    $("#content").load("main.html");

    $.each($("a"), function(index, value) {
        $(value).click(function(e) {
            e.preventDefault();
            $('#content').load(value.href);
        })
    })
})