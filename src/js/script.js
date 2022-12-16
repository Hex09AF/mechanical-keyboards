const title = document.getElementById("title");
const title2 = document.getElementById("title2");
const TITLE_TEXT = "MECHANICAL";
const TITLE_LENGTH = TITLE_TEXT.length;
const TITLE_TEXT_2 = "KEYBOARD";
const TITLE_LENGTH_2 = TITLE_TEXT_2.length;

const genText = (text) => {
    return text.split("").map(v => `<div>${v}</div>`).join("");
}
title.innerHTML = genText(TITLE_TEXT);
title2.innerHTML = genText(TITLE_TEXT_2);

const waveText = window.setInterval(() => {
    for (let _ = 0; _ < 2; ++_) {
        const idx = Math.floor(Math.random() * TITLE_LENGTH);
        const idx2 = Math.floor(Math.random() * TITLE_LENGTH_2);
        const y = Math.random() * 3;
        const y2 = Math.random() * 3;
        title.childNodes[idx].style = `transform: translateY(${y}px);`;
        title2.childNodes[idx2].style = `transform: translateY(${y2}px);`;
    }
}, 300)

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".sections");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=5000"
    }
});

tl.to(".trigger", {
    width: "50%",
});
tl.to(".theLine", {
    strokeDasharray: "1640.82px, 30.7435px"
});

tl.to(sections, {
    xPercent: -10 * (sections.length - 1),
    ease: "none"
});

