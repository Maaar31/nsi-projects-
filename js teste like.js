// Sélectionner tous les éléments avec la classe "like-button"
const like = document.querySelectorAll(".like-button");

like.forEach(button => {
    button.addEventListener("click", () => {
        // mettre la classe "liked" quand le boutton est cliqué
        // le toggle = méthode qui ajoute la classe si elle y est pas et suprime si elle est déja
        button.classList.toggle("liked");
        const profileCard = button.closest(".profile-card");

        if (button.classList.contains("liked")) {
            button.textContent = "❤";
            // Déplacer le profil en haut de la liste
            profileCard.parentElement.insertBefore(profileCard, profileCard.parentElement.firstChild);
        } else {
            button.textContent = "♡";
        }
    });
});

// on fait pareil que pour le boutton croix :

// Sélectionner tous les éléments avec la classe "close-button"
const closeButtons = document.querySelectorAll(".close-button");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".profile-card").style.display = "none";
    });
});