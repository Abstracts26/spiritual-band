const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

if (lightbox && lightboxImg && close) {

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const img = item.querySelector("img");
            if (!img) return;

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

        });

    });

    close.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape" && lightbox.style.display === "flex") {

            lightbox.style.display = "none";

        }

    });

}

/* ==========================================
   CATEGORY FILTERS
========================================== */

const filterPills = document.querySelectorAll(".filter-pill");

filterPills.forEach(pill => {

    pill.addEventListener("click", () => {

        filterPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");

        const filter = pill.getAttribute("data-filter");

        galleryItems.forEach(item => {

            const category = item.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                item.classList.remove("filtered-out");
            } else {
                item.classList.add("filtered-out");
            }

        });

    });

});