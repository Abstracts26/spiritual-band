/* ==========================================
   HERO PARALLAX
========================================== */

const hero = document.querySelector(".hero");

if (hero) {

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;

    });

}


/* ==========================================
   FADE UP ANIMATION
========================================== */

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach((el) => observer.observe(el));