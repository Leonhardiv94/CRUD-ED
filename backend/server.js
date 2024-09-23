// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect('mongodb+srv://leonhardiv94:mhOmqed32GxT8qBc@leonhard.7sh5rq4.mongodb.net/?retryWrites=true&w=majority&appName=leonhard', { useNewUrlParser: true, useUnifiedTopology: true });

const empleadoSchema = new mongoose.Schema({
    codigo: Number,
    nombre: String,
    apellido1: String,
    apellido2: String,
    codigo_departamento: Number
});

const departamentoSchema = new mongoose.Schema({
    codigo: Number,
    nombre: String
});

const Empleado = mongoose.model('Empleado', empleadoSchema);
const Departamento = mongoose.model('Departamento', departamentoSchema);

// Rutas para empleados
app.get('/empleados', async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
});

app.post('/empleados', async (req, res) => {
    const nuevoEmpleado = new Empleado(req.body);
    await nuevoEmpleado.save();
    res.json(nuevoEmpleado);
});

app.put('/empleados/:id', async (req, res) => {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(empleado);
});

app.delete('/empleados/:id', async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ message: 'Empleado eliminado' });
});

// Rutas para departamentos (similares a empleados)
app.get('/departamentos', async (req, res) => {
    const departamentos = await Departamento.find();
    res.json(departamentos);
});

app.post('/departamentos', async (req, res) => {
    const nuevoDepartamento = new Departamento(req.body);
    await nuevoDepartamento.save();
    res.json(nuevoDepartamento);
});

app.put('/departamentos/:id', async (req, res) => {
    const departamento = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(departamento);
});

app.delete('/departamentos/:id', async (req, res) => {
    await Departamento.findByIdAndDelete(req.params.id);
    res.json({ message: 'Departamento eliminado' });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
