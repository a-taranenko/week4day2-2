'use strict';

const getData = require('./lookup_people');

getData.getPersonInfo(process.argv[2], console.log);