// Importez la bibliothèque mysql2

const mysql = require('mysql2');

// Créez une connexion à la base de données MySQL
mysql.createConnection({
  host: 'localhost', // Adresse du serveur MySQL
  user: 'root', // Nom d'utilisateur MySQL
  password: '', // Mot de passe MySQL
  database: 'boxepage' // Nom de la base de données
});
