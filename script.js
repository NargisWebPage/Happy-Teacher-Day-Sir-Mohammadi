/* =========================================
   PAGE NAVIGATION
========================================= */

const pageOne =
    document.getElementById("pageOne");

const pageTwo =
    document.getElementById("pageTwo");

const openButton =
    document.getElementById("openButton");


openButton.addEventListener("click", () => {

    pageOne.classList.remove("active");


    setTimeout(() => {

        pageTwo.classList.add("active");


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

            music.play();

        createCelebration();

    }, 500);

});



/* =========================================
   MUSIC PLAYER
========================================= */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


musicButton.addEventListener("click", () => {


    if (music.paused) {

        music.play();

        musicButton.textContent = "❚❚";

    }

    else {

        music.pause();

        musicButton.textContent = "▶";

    }

});



/* =========================================
   RESET MUSIC BUTTON
========================================= */

music.addEventListener("ended", () => {

    musicButton.textContent = "▶";

});



/* =========================================
   CELEBRATION EFFECT
========================================= */

function createCelebration() {


    const symbols = [

        "</>",

        "{ }",

        "01",

        "101",

        "✨",

        "✦",

        "CODE",

        "AI"

    ];


    for (let i = 0; i < 22; i++) {


        const sparkle =
            document.createElement("div");


        sparkle.classList.add("sparkle");


        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        sparkle.style.position =
            "fixed";


        sparkle.style.left =
            Math.random() * 100 + "vw";


        sparkle.style.top =
            Math.random() * 75 + "vh";


        sparkle.style.color =
            "#168f91";


        sparkle.style.fontFamily =
            "monospace";


        sparkle.style.fontWeight =
            "bold";


        sparkle.style.fontSize =
            "16px";


        sparkle.style.pointerEvents =
            "none";


        sparkle.style.zIndex =
            "100";


        sparkle.style.transition =
            "all 1.2s ease";


        document.body.appendChild(
            sparkle
        );


        setTimeout(() => {

            sparkle.style.opacity = "0";

            sparkle.style.transform =
                `
                translate(
                    ${(Math.random() - 0.5) * 250}px,
                    ${(Math.random() - 0.5) * 250}px
                )
                rotate(180deg)
                scale(0)
                `;

        }, 50);


        setTimeout(() => {

            sparkle.remove();

        }, 1300);

    }

}



/* =========================================
   TECH BACKGROUND ANIMATION
========================================= */

const techWords =
    document.querySelectorAll(
        ".tech-background span"
    );


techWords.forEach((word, index) => {


    word.style.animationDelay =
        `${index * 0.35}s`;


    word.style.animationDuration =
        `${12 + Math.random() * 8}s`;

});