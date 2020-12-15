$(document).ready(function(){
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
        $.each(data, function(key, value) {
            $(".autok").append(`<tr>
            <td>`+value.manufacturer+`</td>
            <td>`+value.name+`</td>
            <td>`+value.color+`</td>
            <td>`+value.year+`</td>
            <td>`+value.horsepower+`</td>
            <td>`+value.consumption+`</td>
            <td>`+value.avaiable+`</td>
        </tr>`);
        })
    })

    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data) {
        $.each(data, function(key, value) {
            $(".gyartok").append(`<tr>
            <td>`+value.name+`</td>
            <td>`+value.country+`</td>
            <td>`+value.founded+`</td>
        </tr>`);
        })
    })
})