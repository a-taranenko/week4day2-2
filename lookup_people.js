'use strict';

const pg = require('pg');
const settings = require('./settings');

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

// const personName = process.argv[2];

// client.connect( (err) => {
//   if (err) {
//     return console.log('Connection Error', err);
//   }

//   client.query(`SELECT id, first_name, last_name, birthdate
//     FROM famous_people WHERE last_name = $1::text`, [personName], (err, result) => {
//     if (err) {
//       return console.log('error running query', err);
//     }

//     result.rows.forEach((element) => {
//       console.log(element.id, element.first_name, element.last_name, element.birthdate);
//     });

//     client.end();
//   });
// });

const getPersonInfo = (lastName, callback/*which can be console.log*/) => {
  client.connect( (err) => {
    if (err) {
      return console.log('Connection Error', err);
    }

    client.query(`SELECT id, first_name, last_name, birthdate
      FROM famous_people WHERE last_name = $1::text`, [lastName], (err, result) => {
      if (err) {
        return console.log('Error running query', err);
      }

      result.rows.forEach((element) => {
        callback(element.id, element.first_name, element.last_name, element.birthdate);
      });

      client.end();
    });
  });
}

module.exports = {
  getPersonInfo: getPersonInfo
}