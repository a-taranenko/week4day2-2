'use strict';

const settings = require('./settings');

var db = require('knex')({
  client: 'pg',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
  }
});

// db.select("id", "first_name", "last_name", "birthdate").from("famous_people").where("first_name", process.argv[2]).then((row) => {
//   row.forEach((element) => {
//     console.log(element.id, element.first_name, element.last_name, element.birthdate);
//   });
// });

db.select("id", "first_name", "last_name", "birthdate").from("famous_people").then((row) => {
  console.log(row);
});

db.destroy();