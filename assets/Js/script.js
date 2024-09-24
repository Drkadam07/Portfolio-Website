$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

// pop up
    const serviceItems = document.querySelector(".service-items");
    const popup = document.querySelector(".popup-box")
    const popupCloseBtn = popup.querySelector(".popup-close-btn");
    const popupCloseIcon = popup.querySelector(".popup-close-icon");
  
    serviceItems.addEventListener("click",function(event){
      if(event.target.tagName.toLowerCase() == "button"){
         const item =event.target.parentElement;
         const h3 = item.querySelector("h3").innerHTML;
         const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
         popup.querySelector("h3").innerHTML = h3;
         popup.querySelector(".popup-body").innerHTML = readMoreCont;
         popupBox();
      }
  
    })
  
    popupCloseBtn.addEventListener("click", popupBox);
    popupCloseIcon.addEventListener("click", popupBox);
  
    popup.addEventListener("click", function(event){
       if(event.target == popup){
          popupBox();
       }
    })
  
    function popupBox(){
      popup.classList.toggle("open");
    }
  
// pop up
// ***********************************************************************************************************

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().topF,
        }, 500, 'linear')
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Dhanraj kadam";
            $("#favicon").attr("href", "assets/images/logo.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });
// <!-- typed js effect starts -->

var typed = new Typed(".typing-text", {
    strings: ["Frontend development", "Backend Development", "Web Designing", "APP Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
// VanillaTilt.init(document.querySelectorAll(".tilt"), {
//     max: 15,
// });
// <!-- tilt js effect ends -->

// disable developer mode

document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return true;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */

srtop.reveal('.heading', { delay: 50 });
srtop.reveal('.hone .image',{delay:50});
srtop.reveal('.home .content h3', { delay: 50 });
srtop.reveal('.home .content p', { delay: 50 });
srtop.reveal('.home .content .btn', { delay: 50 });

srtop.reveal('.home .image', { delay: 50 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */

srtop.reveal('.about .content h3', { delay: 10 });
srtop.reveal('.about .content .tag', { delay: 10 });
srtop.reveal('.about .content p', { delay: 10 });
srtop.reveal('.about .content .box-container', { delay: 10 });
srtop.reveal('.about .content .resumebtn', { delay: 10 });


/* SCROLL SKILLS */

srtop.reveal('.skills .container', { interval: 50 });
srtop.reveal('.skills .container .bar', { delay: 50 });
srtop.reveal('.skills .resume .container1 .box-container ', { interval: 50 });
srtop.reveal('.skills .resume .container1 .box-container .box', { delay: 50 });


/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 50 });


srtop.reveal('.containerf .content-text', { interval: 50 });
srtop.reveal('.containerf .hirebtn', { delay: 50 });
srtop.reveal('.containerf .hirebtn .socialsf', { delay: 50 });
srtop.reveal('.containerf .hirebtn .socialsf .social-iconsf', { interval: 50 });



/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 50 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 50 });
// srtop.reveal('.experience .timeline .container', { interval: 50 });

/* SCROLL CONTACT */
// srtop.reveal('.contact .container', { delay: 500 });
// srtop.reveal('.contact .container .form-group', { delay: 500 });



