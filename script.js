// Effet pour les titres
const animatedTitle = document.querySelector(".animated-title");
animatedTitle.addEventListener("mouseover", () => {
    animatedTitle.style.animation = "fadeIn 2s ease-in-out";
});

animatedTitle.addEventListener("mouseout", () => {
    animatedTitle.style.animation = "";
});

window.addEventListener("load", () => {
    const audio = document.getElementById("background-music");
    if (audio) {
        audio.play();
    }
});

function toggleMusic() {
    const audio = document.getElementById("background-music");
    const button = document.getElementById("toggle-music");
    if (audio.paused) {
        audio.play();
        button.textContent = "Désactiver la musique";
    } else {
        audio.pause();
        button.textContent = "Activer la musique";
    }
}
