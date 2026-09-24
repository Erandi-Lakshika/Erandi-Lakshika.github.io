/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


mobileMenuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* Close mobile menu after clicking */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});



/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "home";

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


window.addEventListener(
    "load",
    updateActiveNavigation
);



/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                targetId === ""
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) {

                return;

            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });



/* =========================================================
   CV BUTTON
========================================================= */

const cvButton =
    document.getElementById("cvButton");


cvButton.addEventListener("click", (event) => {

    event.preventDefault();

    /*
       WHEN YOU HAVE YOUR CV:

       1. Put your CV inside:

          files/my-cv.pdf

       2. Change the code below to:

          window.open("files/my-cv.pdf", "_blank");

    */

    alert(
        "Your CV will be available here soon."
    );

});



/* =========================================================
   SIMPLE SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".content-card, .skill-card, .project-card, .education-card, .contact-card"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});



/* =========================================================
   PROJECT GALLERY (SLIDER)
========================================================= */

document.querySelectorAll(".project-gallery").forEach((gallery) => {

    const track = gallery.querySelector(".gallery-track");
    const prevBtn = gallery.querySelector(".gallery-prev");
    const nextBtn = gallery.querySelector(".gallery-next");
    const dots = gallery.querySelectorAll(".gallery-dot");

    if (!track) return;

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            track.scrollBy({
                left: -track.clientWidth,
                behavior: "smooth"
            });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            track.scrollBy({
                left: track.clientWidth,
                behavior: "smooth"
            });
        });
    }

    if (dots.length > 0) {
        track.addEventListener("scroll", () => {
            const index = Math.round(track.scrollLeft / track.clientWidth);
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
        });

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                track.scrollTo({
                    left: i * track.clientWidth,
                    behavior: "smooth"
                });
            });
        });
    }

});