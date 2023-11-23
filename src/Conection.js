
/*
const mysql = require('mysql2');
//const exp = require('express');
//const express = exp();

 function connectToDatabase() {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  port:'3307',
  password:'',
  database: 'boxepage',
});
connection.connect((err) => {
  if (err) {
    reject(err);
    return;
  }

  console.log('Connexion à la base de données MySQL établie');
  
  resolve(connection);
  executeQuery(connection,"SELECT * FROM `typecours`")
});
});
}


 function executeQuery(connection,query) {
  return new Promise((resolve, reject) => {
connection.query(query, function (err, result){
 if (err) {
  reject(err);
  return;
 }
 resolve(result);



 connection.end((err) => {
  if (err) {
    console.error('Erreur lors de la fermeture de la connexion :', err);
    return;
  }
  console.log('Connexion à la base de données MySQL fermée');
});

});
});
}

module.exports = {
  executeQuery,
  connectToDatabase,
 
};*/



