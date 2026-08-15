/* =====================================
   SCROLL INDICATOR
===================================== */

const scrollIndicator = document.getElementById("scrollIndicator");
const aboutSection = document.getElementById("about") ||
    document.querySelector("main section:nth-of-type(2)");

if (scrollIndicator) {

    scrollIndicator.addEventListener("click", () => {

        if (window.scrollY < 100) {

            if (aboutSection) {

                aboutSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        } else {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

    window.addEventListener("scroll", () => {

        scrollIndicator.textContent =
            window.scrollY < 100 ? "↓" : "↑";

    });

}