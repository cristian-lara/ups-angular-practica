const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//settings
app.set('puerto', process.env.PORT || 3000);
app.set('nombreApp', 'Gestión de empleados');
app.use(morgan('dev'));

app.use(express.json());
app.use(cors());
let instance = null;

module.exports = {
    getInstance: function() {
        if (!instance) {
            instance = app;
            // Database and routes can be initialized here if they should be part of the singleton
            require('./src/database');
            app.use('/api/empleados', require('./src/routes/empleados.route'));
        }
        return instance;
    }
};