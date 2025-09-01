const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sequelize = require('./database/db');
const Paciente = require('./models/Paciente');
const Usuario = require('./models/Usuario');
const autenticarToken = require('./middlewares/auth');

const app = express();
app.use(express.json());

// Sincroniza os modelos com o banco (cria tabelas)
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado.');
});

// Rota protegida GET /pacientes
app.get('/pacientes', autenticarToken, async (req, res) => {
  const pacientes = await Paciente.findAll();
  res.json(pacientes);
});

// Rota protegida POST /pacientes
app.post('/pacientes', autenticarToken, async (req, res) => {
  const { nome, cpf } = req.body;

  if (!nome || !cpf) {
    return res.status(400).json({ erro: 'Nome e CPF são obrigatórios' });
  }

  const novoPaciente = await Paciente.create({ nome, cpf });
  res.status(201).json(novoPaciente);
});

// Rota protegida PUT /pacientes/:id
app.put('/pacientes/:id', autenticarToken, async (req, res) => {
  const id = req.params.id;
  const { nome, cpf } = req.body;

  const paciente = await Paciente.findByPk(id);
  if (!paciente) {
    return res.status(404).json({ erro: 'Paciente não encontrado' });
  }

  if (nome) paciente.nome = nome;
  if (cpf) paciente.cpf = cpf;

  await paciente.save();
  res.json(paciente);
});

// Rota protegida DELETE /pacientes/:id
app.delete('/pacientes/:id', autenticarToken, async (req, res) => {
  const id = req.params.id;

  const paciente = await Paciente.findByPk(id);
  if (!paciente) {
    return res.status(404).json({ erro: 'Paciente não encontrado' });
  }

  await paciente.destroy();
  res.json({ mensagem: 'Paciente removido com sucesso' });
});

// Rota pública raiz
app.get('/', (req, res) => {
  res.send('API SGHSS funcionando com banco e autenticação JWT!');
});

// Rota pública de cadastro
app.post('/signup', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
  }

  const usuarioExistente = await Usuario.findOne({ where: { email } });
  if (usuarioExistente) {
    return res.status(400).json({ erro: 'Email já cadastrado' });
  }

  const senhaHash = await bcrypt.hash(senha, 10);

  const novoUsuario = await Usuario.create({
    email,
    senha: senhaHash
  });

  res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
});

// Rota pública de login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) {
    return res.status(401).json({ erro: 'Senha incorreta' });
  }

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email },
    'segredo123', // Em produção, use variável de ambiente
    { expiresIn: '2h' }
  );

  res.json({ token });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});