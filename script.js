// Effet pour les titres
const animatedTitle = document.querySelector(".animated-title");
animatedTitle.addEventListener("mouseover", () => {
    animatedTitle.style.animation = "fadeIn 2s ease-in-out"; // Appliquer l'animation au survol
});

animatedTitle.addEventListener("mouseout", () => {
    animatedTitle.style.animation = ""; // Supprimer l'animation lorsque la souris quitte
});

window.addEventListener("load", () => {
    const audio = document.getElementById("background-music");
    if (audio) {
        audio.play(); // Jouer la musique de fond au chargement de la page
    }
});

function toggleMusic() {
    const audio = document.getElementById("background-music");
    const button = document.getElementById("toggle-music");
    if (audio.paused) {
        audio.play(); // Jouer la musique si elle est en pause
        button.textContent = "Désactiver la musique"; // Mettre à jour le texte du bouton
    } else {
        audio.pause(); // Mettre en pause la musique si elle est en lecture
        button.textContent = "Activer la musique"; // Mettre à jour le texte du bouton
    }
}

// Fonction pour afficher les sous-catégories
function showSubReason() {
    const reason = document.getElementById("reason").value;
    const subReasonGroup = document.getElementById("sub-reason-group");
    const subReasonSelect = document.getElementById("sub-reason");
    subReasonSelect.innerHTML = ""; // Réinitialiser les options

    // Ajouter les options en fonction de la raison sélectionnée
    if (reason === "support") {
        subReasonSelect.innerHTML = `
            <option value="technical">Problème technique</option>
            <option value="account">Problème de compte</option>
        `;
    } else if (reason === "feedback") {
        subReasonSelect.innerHTML = `
            <option value="suggestion">Suggestion</option>
            <option value="complaint">Plainte</option>
        `;
    }

    subReasonGroup.style.display = reason ? "block" : "none"; // Afficher ou cacher le groupe de sous-catégories
}

// Fonction pour obtenir l'email de contact
function getContactEmail() {
    const reason = document.getElementById("reason").value;
    const subReason = document.getElementById("sub-reason").value;
    let email = "";

    // Déterminer l'email en fonction de la raison et de la sous-catégorie sélectionnées
    if (reason === "support") {
        if (subReason === "technical") {
            email = "techsupport@lovewish.com";
        } else if (subReason === "account") {
            email = "accountsupport@lovewish.com";
        }
    } else if (reason === "feedback") {
        if (subReason === "suggestion") {
            email = "suggestions@lovewish.com";
        } else if (subReason === "complaint") {
            email = "complaints@lovewish.com";
        }
    }

    // Afficher l'email de contact ou un message d'erreur
    document.getElementById("contact-email").textContent = email ? `Veuillez contacter : ${email}` : "Veuillez sélectionner une raison et une sous-catégorie.";
}
