const mongoose = require('mongoose');
const URI = 'mongodb+srv://cristianlara:vm3IsMMAGWZ4sgF4@cluster0.msg63g1.mongodb.net/?authSource=admin';
mongoose.connect(URI)
    .then(db => console.log('db conectada'))
    .catch(err => console.log('err al conectar'))
module.exports= mongoose;
