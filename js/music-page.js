const lyricsToggles = document.querySelectorAll(".lyrics-toggle");

function openLyrics(body){
    body.style.maxHeight = body.scrollHeight + "px";
}

function closeLyrics(body){
    body.style.maxHeight = body.scrollHeight + "px";
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            body.style.maxHeight = "0px";
        });
    });
}

lyricsToggles.forEach(btn => {

    const group = btn.closest(".lyrics-group");
    const body = group.querySelector(".lyrics-body");
    const arrow = btn.querySelector(".lyrics-arrow");

    if (group.classList.contains("open")) {
        body.style.maxHeight = body.scrollHeight + "px";
    }

    btn.addEventListener("click", () => {

        const isOpen = group.classList.contains("open");

        if (isOpen) {
            closeLyrics(body);
            group.classList.remove("open");
            arrow.textContent = "▸";
            btn.setAttribute("aria-expanded", "false");
        } else {
            openLyrics(body);
            group.classList.add("open");
            arrow.textContent = "▾";
            btn.setAttribute("aria-expanded", "true");
        }

    });

    window.addEventListener("resize", () => {
        if (group.classList.contains("open")) {
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });

});