
// Resize do fake header automatico
$(document).ready(function () {
    var menuHeight = document.getElementById('menuResponsible').clientHeight;
    $("#fakeHeader").css("height", menuHeight);
});
$(window).resize(function () {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function () {
        $(this).trigger('resizeEnd');
    }, 400);
    $(window).bind('resizeEnd', function () {
        var menuHeight = document.getElementById('menuResponsible').clientHeight;
        $("#fakeHeader").css("height", menuHeight);
    });
});

$(document).ready(function () {
    var maxLength = 240;
    $(".show-read-more").each(function () {
        var myStr = $(this).text();
        if ($.trim(myStr).length > maxLength) {
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more alt-text">...</a>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function () {
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });
});

$(window).on("load resize orientationchange", function () {
    if ($(window).width() > 991) {
        var maxLength = 50;
    } else {
        var maxLength = 150;
    }
    $(".show-read-more2").each(function () {
        var myStr = $(this).text();
        if ($.trim(myStr).length > maxLength) {
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more2 alt-small text-white">[...]</a>');
            $(this).append('<span class="more-text2">' + removedStr + '</span>');
        }
    });
    $(".read-more2").click(function () {
        $(this).siblings(".more-text2").contents().unwrap();
        $(this).remove();
    });
});

$(".btnCategorias").click(function () {
    // Instead of directly editing CSS, toggle a class
    $(".btnCategorias").removeClass("active"); //removes classes everywhere
    $(this).toggleClass("active"); //adds the class at the right button
});

$('.carrosselBannerRotativo').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
});

$(window).on("load resize orientationchange", function () {
    $(".btnCategorias").each(function () {
        if ($(window).width() > 991) {
            $(".btnCategorias").parent().addClass("col text-center");
        } else {
            $(".btnCategorias").parent().addClass("col-4 col-md-3 text-center px-2 px-md-3");
        }
    });
});