const empleadoCtrl={};

const Empleado = require('../models/Empleado');
empleadoCtrl.getEmpleados= async(req, res)=>
{
    const empleados= await Empleado.find();
    res.json(empleados);
}


empleadoCtrl.createEmpleado= async(req,res)=>{
    console.log('req', req.body)
    try {
        const empleado=new Empleado({
            nombre: req.body.nombre,
            cargo: req.body.cargo,
            departamento:req.body.departamento,
            sueldo:req.body.sueldo
        });
        console.log(empleado);
        await empleado.save();
        res.json('status: Datos guardados');
    }catch (err){
        res.status(500).send('No guardo :(');
    }

}
empleadoCtrl.getEmpleado = async (req, res) => {

    try {
        const empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            // Si no se encontró un empleado, devuelve un 404
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.json(empleado);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
empleadoCtrl.editEmpleado=async (req,res)=>{
    console.log('req.body', req.body)
    const empleado= await Empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json(empleado);
}
empleadoCtrl.deleteEmpleado= async (req,res)=>{
    const empleado= await Empleado.findByIdAndDelete(req.params.id);
    res.json(empleado);
}
module.exports=empleadoCtrl;
