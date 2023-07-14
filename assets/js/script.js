/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on("load", function () {
    const elements = document.querySelectorAll(".my-text,.my-image");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    elements.forEach((element) => observer.observe(element));
    function animateElement(element) {
        gsap.fromTo(
            element,
            { "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", opacity: 0, y: 10 },
            { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 1.2 }
        );
    }
});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */



$(document).ready(function () {

    // testimonial-active
    $(function () {
        if ($('.testimonials-active').length) {
            $(".testimonials-active").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                animateOut: 'fadeOut',
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });



    // wow js init
    // $(function () {
    //     var wow = new WOW({
    //         animateClass: 'animated',
    //         mobile: true
    //     });
    //     wow.init();
    // });



});






// before load

tl = gsap.timeline({
    defaults: {
        duration: 1.5,
        ease: "expo.inOut",
        delay: 1,
    },
});

tl.to(".slide-1", { width: 0 }).to("#introduction", { height: 0 });
