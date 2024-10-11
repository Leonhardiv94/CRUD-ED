const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cedula: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
