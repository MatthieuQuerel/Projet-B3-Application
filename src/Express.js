//const { connectToDatabase, executeQuery } = require('./Conection.js');

const express = require('express');
const mysql = require('mysql2');
const app = express(); // Utilisez 'mysql2/promise' pour prendre en charge les Promises
const cors = require('cors');
app.use(cors());

app.use(express.json())

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: 'root',
      port: '3307',
      password: '',
      database: 'boxepage',
    });
    console.log('Connexion à la base de données MySQL établie');
    return connection;
  } catch (err) {
    console.error('Erreur lors de la connexion à la base de données :', err);
    throw err;
  }
}

function executeQuery(connection,query) {
    return new Promise((resolve, reject) => {
  connection.query(query, function (err, result){
   if (err) {
    reject(err);
    return;
   }
   
  resolve(result);
   return result ;
  
});
});
}

/////////////////////////partie express///////////////////////////////////

app.get('/Cours', async (req, res) => {
  const connection = await connectToDatabase();
  const query = "SELECT * FROM typecours";
  try {
    const data = await executeQuery(connection, query);
    return res.json(data);
  } catch (err) {
    console.error('Erreur lors de la récupération des données :', err);
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});

app.post('/Contact', async (req, res) => {
  try {
const connection = await connectToDatabase();
    const formData = req.body; 
console.log(formData);
    const query = `INSERT INTO users (Name, SerName, Years, Date_Naissance, Adresse, Licencier) 
                   VALUES ('${formData.Nom}', '${formData.prenom}', '${formData.age}',
                           '${formData.dateNaissance}', '${formData.adresse}', ${formData.licencier})`;

    await executeQuery(connection, query);
    res.status(200).json({ message: 'Data received successfully' });
  } catch (error) {
    
  
console.error('Error:', error);
    res.
   
status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(8081, () => {
  console.log('Le serveur est en cours d\'exécution sur http://localhost:8081');
});

  
