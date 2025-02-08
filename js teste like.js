// Sélectionner tous les éléments avec la classe "like-button"
const likeButtons = document.querySelectorAll(".like-button");
// const est un type de variable qui ne peut pas être changée après avoir été déclarée
// Objet pour stocker les positions d'origine des profils
const originalPositions = {};

// Parcourir chaque bouton "like"
likeButtons.forEach(button => {
    // Stocker la position d'origine du profil
    // profilecard contient la carte de profil contenant le bouton "like" cliqué.
    // closest = méthode qui retourne le neud le plus proche qui correspond ici à la classe "profile-card"
    const profileCard = button.closest(".profile-card");
    // originalPositions = objet qui stocke l'élément suivant après profil-card
    originalPositions[profileCard.id] = profileCard.nextElementSibling;

    // Ajouter un écouteur d'événement "click" à chaque bouton
    button.addEventListener("click", () => {
        // mettre la classe "liked" quand le boutton est cliqué
        // le toggle = méthode qui ajoute la classe si elle y est pas et suprime si elle est déja
        button.classList.toggle("liked");
        // enregistre la place du premiers éléments de la liste profile-card
        const profileLine = profileCard.parentElement;

        if (button.classList.contains("liked")) {
            button.textContent = "❤";
            // Déplacer le profil en haut de la liste (voir la photos des neud)
            profileLine.insertBefore(profileCard, profileLine.firstChild);
            // parentNode.insertBefore(newNode, referenceNode);
        } else {
            button.textContent = "♡";
            // Remettre le profil à sa position d'origine
                profileLine.insertBefore(profileCard, originalPositions[profileCard.id]);
        }
    });
});

// Sélectionner tous les éléments avec la classe "close-button"
const closeButtons = document.querySelectorAll(".close-button");

// Parcourir chaque bouton "close"
closeButtons.forEach(button => {
    // Ajouter un écouteur d'événement "click" à chaque bouton
    button.addEventListener("click", () => {
        // Faire disparaître le profil parent du bouton cliqué
        button.closest(".profile-card").style.display = "none";
    });
});