const { Router }= require('express');
const router=Router();
const
    empleado=require('../controllers/emplreado.controller');
const {validarEmpleado} = require("../middleware/validacion");
router.get('/',empleado.getEmpleados);
router.post('/',validarEmpleado, empleado.createEmpleado);
router.get('/:id',empleado.getEmpleado);
router.put('/:id',empleado.editEmpleado);
router.delete('/:id', empleado.deleteEmpleado);
module.exports=router;
