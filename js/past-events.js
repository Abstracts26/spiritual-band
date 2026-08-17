const tourToggles = document.querySelectorAll(".tour-toggle");

function openPanel(shows){
    shows.style.maxHeight = shows.scrollHeight + "px";
}

function closePanel(shows){
    // set an explicit starting height first so the browser has
    // something concrete to animate FROM, then collapse to 0
    shows.style.maxHeight = shows.scrollHeight + "px";
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            shows.style.maxHeight = "0px";
        });
    });
}

tourToggles.forEach(btn => {

    const group = btn.closest(".tour-group");
    const shows = group.querySelector(".tour-shows");
    const arrow = btn.querySelector(".tour-arrow");

    // set the correct starting height for panels that load already open
    if (group.classList.contains("open")) {
        shows.style.maxHeight = shows.scrollHeight + "px";
    }

    btn.addEventListener("click", () => {

        const isCurrentlyOpen = group.classList.contains("open");

        if (isCurrentlyOpen) {
            closePanel(shows);
            group.classList.remove("open");
            arrow.textContent = "▸";
            btn.setAttribute("aria-expanded", "false");
        } else {
            openPanel(shows);
            group.classList.add("open");
            arrow.textContent = "▾";
            btn.setAttribute("aria-expanded", "true");
        }

    });

    // keep an already-open panel correctly sized if the window resizes
    // (e.g. text reflows to more/fewer lines)
    window.addEventListener("resize", () => {
        if (group.classList.contains("open")) {
            shows.style.maxHeight = shows.scrollHeight + "px";
        }
    });

});