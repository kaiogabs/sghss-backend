# SGHSS – Sistema de Gerenciamento Hospitalar Simplificado de Saúde (Back-End)

Projeto desenvolvido para a disciplina de **Back-End (2025A1)**, com foco em construção de **API RESTful** utilizando Node.js, Express e Sequelize.  

---

## 🚀 Tecnologias Utilizadas
- Node.js  
- Express  
- Sequelize (ORM)  
- SQLite  
- JWT (jsonwebtoken)  
- bcryptjs  
- Postman (para testes de rotas)  

---

## 📂 Estrutura do Projeto
```
├── database/       # Configuração do banco de dados SQLite
├── middlewares/    # Middleware de autenticação JWT
├── models/         # Modelos Sequelize (Usuario, Paciente)
├── index.js        # Ponto de entrada da aplicação
├── package.json    # Dependências e scripts
```

---

## ⚙️ Como Executar
1. **Clonar repositório**
   ```bash
   git clone https://github.com/kaiogabs/sghss-backend
   cd sghss-backend
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente**
   - Criar um arquivo `.env` na raiz com a chave:
     ```
     JWT_SECRET=seusegredoaqui
     ```
   *(caso não crie, o projeto usará o valor padrão definido no código)*

4. **Executar servidor**
   ```bash
   node index.js
   ```
   → Mensagem esperada no terminal:  
   *“Banco de dados sincronizado. Servidor rodando na porta 3000”*

---

## 🔑 Endpoints Principais

### Autenticação
- `POST /signup` → Cadastro de novo usuário  
- `POST /login` → Login e geração de token JWT  

### Pacientes (necessário token JWT)
- `GET /pacientes` → Lista todos os pacientes  
- `POST /pacientes` → Cadastra novo paciente  
- `PUT /pacientes/:id` → Atualiza paciente existente  
- `DELETE /pacientes/:id` → Remove paciente existente  

---

## 🧪 Testes
- Testes realizados via **Postman**, com evidências documentadas no PDF final do projeto.  
- Casos de teste contemplam:  
  - Cadastro e login de usuário  
  - Emissão e validação de JWT  
  - Acesso negado sem token  
  - CRUD de pacientes (sucesso e erros)  

---

## 📌 Observações
- Este projeto tem caráter **didático**, limitado a um protótipo simplificado de Back-End.  
  - Associação entre usuários e pacientes  
  - Implementação de testes automatizados (Jest/Supertest)  
