<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demandes de contact - LoveWish</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Demandes de contact</h1>
    </header>
    <div class="content">
        <?php
        $file = 'contacts.txt';
        if (file_exists($file)) {
            $contacts = file_get_contents($file);
            echo nl2br($contacts);
        } else {
            echo "<p>Aucune demande de contact pour le moment.</p>";
        }
        ?>
    </div>
    <footer>
        <p>&copy; 2024 LoveWish - Tous droits réservés</p>
    </footer>
</body>
</html>
