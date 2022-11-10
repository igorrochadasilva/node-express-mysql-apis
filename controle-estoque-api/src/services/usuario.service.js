const usuarioRepository = require("../repositories/usuario.repository");
require("dotenv").config();
const bcrypt = require("bcrypt");

const create = async function (usuario) {
  usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT);
  const usuarioCriado = await usuarioRepository.create(usuario);
  return usuarioCriado;
};

const encontrarTodos = async function () {
  const usuarios = await usuarioRepository.encontrarTodos();
  return usuarios;
};

const encontrarPorId = async function (id) {
  const usuario = await usuarioRepository.encontrarPorId(id);
  return usuario;
};

module.exports = {
  create: create,
  encontrarTodos: encontrarTodos,
  encontrarPorId: encontrarPorId,
};
