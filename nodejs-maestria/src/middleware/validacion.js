const validarEmpleado = (req, res, next) => {
    const { nombre, cargo, departamento, sueldo } = req.body;

    // Validar que se proporcionen todos los campos requeridos
    if (!nombre || !cargo || !departamento || !sueldo) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Validar que el sueldo sea un número positivo
    if (typeof sueldo !== 'number' || sueldo <= 0) {
        return res.status(400).json({ error: 'El sueldo debe ser un número positivo' });
    }

    // Si todos los datos son válidos, pasa al siguiente middleware
    next();
};

module.exports = {
    validarEmpleado,
};
