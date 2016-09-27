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

let firstName = process.argv[2];
let secondName = process.argv[3];
let birthDate = process.argv[4];

db.insert([{first_name: firstName, last_name: secondName, birthdate: birthDate}]).into("famous_people").then((row) => {
  console.log('Success!');
}).catch((row) => {
  console.log('Catch:', row);
});

db.destroy();