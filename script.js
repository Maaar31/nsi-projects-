// Effet pour les titres
const titreAnime = document.querySelector(".titre-anime");
titreAnime.addEventListener("mouseover", () => {
    titreAnime.style.animation = "fadeIn 2s ease-in-out"; // Appliquer l'animation au survol
});

titreAnime.addEventListener("mouseout", () => {
    titreAnime.style.animation = ""; // Supprimer l'animation lorsque la souris quitte
});

window.addEventListener("load", () => {
    const audio = document.getElementById("musique-fond");
    if (audio) {
        audio.play(); // Jouer la musique de fond au chargement de la page
    }
});

function toggleMusic() {
    const audio = document.getElementById("musique-fond");
    const bouton = document.getElementById("basculer-musique");
    if (audio.paused) {
        audio.play(); // Jouer la musique si elle est en pause
        bouton.textContent = "Désactiver la musique"; // Mettre à jour le texte du bouton
    } else {
        audio.pause(); // Mettre en pause la musique si elle est en lecture
        bouton.textContent = "Activer la musique"; // Mettre à jour le texte du bouton
    }
}


// Fonction pour afficher les sous-catégories
function afficherSousMotif() {
    const motif = document.getElementById("motif").value;
    const groupeSousMotif = document.getElementById("groupe-sous-motif");
    const sousMotifSelect = document.getElementById("sous-motif");
    sousMotifSelect.innerHTML = ""; // Réinitialiser les options

    // Ajouter les options en fonction du motif sélectionné
    if (motif === "support") {
        sousMotifSelect.innerHTML = `
            <option value="technical">Problème technique</option>
            <option value="account">Problème de compte</option>
        `;
    } else if (motif === "feedback") {
        sousMotifSelect.innerHTML = `
            <option value="suggestion">Suggestion</option>
            <option value="complaint">Plainte</option>
        `;
    }

    groupeSousMotif.style.display = motif ? "block" : "none"; // Afficher ou cacher le groupe de sous-catégories
}

// Fonction pour obtenir l'email de contact
function obtenirEmailContact() {
    const motif = document.getElementById("motif").value;
    const sousMotif = document.getElementById("sous-motif").value;
    let email = "";

    // Déterminer l'email en fonction du motif et de la sous-catégorie sélectionnés
    if (motif === "support") {
        if (sousMotif === "technical") {
            email = "techsupport@lovewish.com";
        } else if (sousMotif === "account") {
            email = "accountsupport@lovewish.com";
        }
    } else if (motif === "feedback") {
        if (sousMotif === "suggestion") {
            email = "suggestions@lovewish.com";
        } else if (sousMotif === "complaint") {
            email = "complaints@lovewish.com";
        }
    }

    // Afficher l'email de contact ou un message d'erreur
    document.getElementById("email-contact").textContent = email ? `Veuillez contacter : ${email}` : "Veuillez sélectionner un motif et une sous-catégorie.";
}