window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    const navbar = document.querySelector(".navbar");
    const sound = document.getElementById("introSound");

    const alreadyPlayed = sessionStorage.getItem("spiritualIntroPlayed");

    if (alreadyPlayed) {

        // Not the first visit this session — skip straight to the site,
        // no preloader animation or intro sound.
        preloader.classList.add("hide");
        navbar.classList.add("show");
        return;

    }

    // First visit this session — play the full intro once.
    sessionStorage.setItem("spiritualIntroPlayed", "true");

    // 🔊 play sound (user interaction safe way)
    setTimeout(() => {
        sound.play().catch(() => {});
    }, 3500);

    setTimeout(() => {

        preloader.classList.add("hide");

        // show navbar
        navbar.classList.add("show");

    }, 3500); // 🔥 animation duration
});