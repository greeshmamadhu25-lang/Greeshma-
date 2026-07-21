// Scroll Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});

// Typing Effect

const text = [
    "B.Voc Information Technology Graduate",
    "Web Developer",
    "Flutter Developer",
    "Front-End Enthusiast"
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (charIndex < text[textIndex].length) {

        typing.textContent += text[textIndex].charAt(charIndex);
        charIndex++;

        setTimeout(type, 80);

    } else {

        setTimeout(erase, 1800);

    }

}

function erase() {

    if (charIndex > 0) {

        typing.textContent = text[textIndex].substring(0, charIndex - 1);
        charIndex--;

        setTimeout(erase, 40);

    } else {

        textIndex++;

        if (textIndex >= text.length) {
            textIndex = 0;
        }

        setTimeout(type, 300);

    }

}

type();
// Mobile Navigation

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
