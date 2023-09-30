const mongoose = require('mongoose');
const URI = 'mongodb://dev:dev@127.0.0.1/?authSource=admin';
mongoose.connect(URI)
    .then(db => console.log('db conectada'))
    .catch(err => console.log('err al conectar'))
module.exports= mongoose;
