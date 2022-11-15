const mongoose = require('mongoose');

const dbName = 'pirates';

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
    .then(() => console.log(`Established a connection to the ${dbName}`))
    .catch(err => console.log(`Something went wrong when connecting to the ${dbName}`, err));