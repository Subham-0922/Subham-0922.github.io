
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('#nav-menu').addClass("sticky");
        }else{
            $('#nav-menu').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });




    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('#nav-menu .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('#nav-link_home').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('#nav-link_home i').toggleClass("active");
    });
    $('#nav-link_project').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('#nav-link_project i').toggleClass("active");
    });
    $('#nav-link_about').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('#nav-link_about i').toggleClass("active");
    });
    $('#resume-link-1').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('#resume-link-1 i').toggleClass("active");
    });
    $('#nav-link_contact').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('#nav-link_contact i').toggleClass("active");
    });
    $('#nav-link_skills').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('#nav-link_skills i').toggleClass("active");
    });
    $('.menu-btn').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Java Backend Developer!", "Problem  Solver","Fast Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
     strings:  ["Java Backend Developer!", "Problem  Solver","Fast Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

