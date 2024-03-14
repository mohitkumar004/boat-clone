function changeimg() {
    var img = document.getElementById("image");
    img.scr = 'neckband.png'
}
$('#biplab-carousal').owlCarousel({
    items: 1,
    margin: 5,
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 1700,
    dots: false,
    stagePadding: 0,
    responsiveClass: true,
    autoplaySpeed: 800,
    //     navText: [
    //         "<i class='fa fa-caret-left text-success' onclick='Secondfunction()' id='Left'></i>",
    //         "<i class='fa fa-caret-right text-success' id='Right' onclick='Myfunction()'></i>",
    // 
    //     ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        380: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        },
        1400: {
            items: 4
        }
    }
});

$('#mohit-carousal , #mohit2-carousal,#mohit3-carousal,#mohit5-carousal').owlCarousel({
    items: 1,
    margin: 5,
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 1700,
    dots: false,
    stagePadding: 0,
    responsiveClass: true,
    autoplaySpeed: 800,
    navText: [
        // "<i class='fa fa-caret-left text-success' onclick='Secondfunction()' id='Left'></i>",
        // "<i class='fa fa-caret-right text-success' id='Right' onclick='Myfunction()'></i>",

    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        380: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        },
        1400: {
            items: 4
        }
    }
});


$('#mohit4-carousal').owlCarousel({
    items: 1,
    margin: 5,
    loop: false,
    nav: false,
    autoplay: false,
    autoplayTimeout: 1700,
    dots: false,
    stagePadding: 0,
    responsiveClass: true,
    autoplaySpeed: 800,
    navText: [
        // "<i class='fa fa-caret-left text-success' onclick='Secondfunction()' id='Left'></i>",
        // "<i class='fa fa-caret-right text-success' id='Right' onclick='Myfunction()'></i>",

    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        380: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        },
        1400: {
            items: 4
        }
    }
});
