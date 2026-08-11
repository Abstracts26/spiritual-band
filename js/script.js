const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

if (audio && playBtn && progress) {

    let playing = false;

    playBtn.addEventListener("click", () => {

        if (!playing) {
            audio.play();
            playBtn.innerHTML = "⏸";
            playing = true;
        } else {
            audio.pause();
            playBtn.innerHTML = "▶";
            playing = false;
        }

    });

    audio.addEventListener("timeupdate", () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });

    progress.addEventListener("input", () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });

}

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

if (lightbox && lightboxImg && close) {

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = item.src;

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

}


/*contact form*/

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {

            alert("Please fill all fields!");
            return;

        }

        alert("Message Sent Successfully!");
        form.reset();

    });

}

/*preloader*/ 

/*window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 2000);

});

const title = "SPIRITUAL";
const loaderTitle = document.getElementById("loaderTitle");
const subtitle = document.getElementById("loaderSubtitle");
const preloader = document.getElementById("preloader");

let index = 0;

function typeTitle(){

    if(index < title.length){

        loaderTitle.textContent += title.charAt(index);
        index++;
        setTimeout(typeTitle,180);

    }

    else{

        subtitle.style.opacity = "1";
        setTimeout(()=>{

            preloader.classList.add("hide");

        },1500);

    }

}

window.addEventListener("load",()=>{

    typeTitle();

});*/

const word = "SPIRITUAL";
const loaderTitle = document.getElementById("loaderTitle");
const subtitle = document.getElementById("loaderSubtitle");
const line = document.querySelector(".loader-line");
const preloader = document.getElementById("preloader");

let i = 0;

function typeWord(){

    if(i < word.length){

        loaderTitle.textContent += word.charAt(i);
        i++;
        setTimeout(typeWord,170);

    }

    else{

        line.style.width = "100%";
        subtitle.style.opacity="1";
        subtitle.style.transform="translateY(0)";

        setTimeout(()=>{

            preloader.classList.add("hide");

        },2200);

    }

}

window.addEventListener("load",()=>{

    typeWord();

});