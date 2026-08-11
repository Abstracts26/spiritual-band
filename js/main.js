window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    const navbar = document.querySelector(".navbar");
    const sound = document.getElementById("introSound");

    // 🔊 play sound (user interaction safe way)
    setTimeout(() => {
        sound.play().catch(() => {});
    }, 500);

    setTimeout(() => {

        preloader.classList.add("hide");

        // show navbar
        navbar.classList.add("show");

    }, 3500); // 🔥 animation duration
});