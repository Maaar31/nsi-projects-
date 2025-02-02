<?php
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

$file = 'contacts.txt';
$current = file_get_contents($file);
$current .= "Nom: $name\nEmail: $email\nMessage: $message\n\n";
file_put_contents($file, $current);

echo 'Données de contact enregistrées avec succès';
?>
