$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");


    $('.carousel').carousel({
        interval: 15000
    })
});

function hideMenu() {
    menu.classList.remove('show');
}

var liElement = document.getElementsByClassName('li');
var menu = document.getElementById('navbarSupportedContent');
for (var i = 0; i < liElement.length; i++) {
    liElement[i].addEventListener("click", hideMenu);
}
