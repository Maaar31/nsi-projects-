// Effet pour les titres
const animatedTitle = document.querySelector(".animated-title");
animatedTitle.addEventListener("mouseover", () => {
    animatedTitle.style.animation = "fadeIn 2s ease-in-out";
});

animatedTitle.addEventListener("mouseout", () => {
    animatedTitle.style.animation = "";
});
