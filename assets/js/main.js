// When the page is scrolled
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {  // Change 50 to adjust when to apply the effect
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// preloader
window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
  });

 // Mouse Follower
 const follower = document.querySelector(
    ".mouse-follower .cursor-outline"
);
const dot = document.querySelector(".mouse-follower .cursor-dot");
window.addEventListener("mousemove", (e) => {
    follower.animate(
        [{
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out",
        }, ], {
            duration: 3000,
            fill: "forwards",
        }
    );
    dot.animate(
        [{
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out",
        }, ], {
            duration: 1500,
            fill: "forwards",
        }
    );
});

// Mouse Follower Hide Function
$("a, button").on("mouseenter mouseleave", function() {
    $(".mouse-follower").toggleClass("hide-cursor");
});

var terElement = $(
    "h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six"
);
$(terElement).on("mouseenter mouseleave", function() {
    $(".mouse-follower").toggleClass("highlight-cursor-head");
    $(this).toggleClass("highlight-cursor-head");
});

var terElement = $("p");
$(terElement).on("mouseenter mouseleave", function() {
    $(".mouse-follower").toggleClass("highlight-cursor-para");
    $(this).toggleClass("highlight-cursor-para");
});


