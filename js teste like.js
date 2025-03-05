// Sélectionner tous les éléments avec la classe "like"
const like = document.querySelectorAll(".like");

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

// Sélectionner tous les éléments avec la classe "croix"
const closeButtons = document.querySelectorAll(".croix");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".profile-card").style.display = "none";
    });
});