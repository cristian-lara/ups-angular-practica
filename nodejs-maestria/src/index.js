const express=require('express');
const morgan=require('morgan');
const app=express();
require('./database');
//settings
app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/empleados',require('./routes/empleados.route'));
app.listen(app.get('puerto'), ()=>{
    console.log('Nombre de la App',app.get('nombreApp'));
    console.log('Puerto del servidor',app.get('puerto'));
})

module.exports=app;
