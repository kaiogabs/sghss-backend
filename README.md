
# SGHSS - Backend

Projeto de API RESTful desenvolvido para a disciplina **Projetos Multidisciplinar** (Eletiva) do curso de Análise e Desenvolvimento de Sistemas – 2025.1.

## 📚 Descrição

Esta aplicação representa o backend de um sistema de gerenciamento de hospitalização, chamado **SGHSS (Sistema de Gestão Hospitalar Simples e Seguro)**. O projeto foi desenvolvido com foco em consolidar conhecimentos em Engenharia de Software, modelagem de banco de dados, e construção de APIs com Node.js.

## 🚀 Tecnologias utilizadas

- **Node.js**
- **Express.js**
- **SQLite3** (banco de dados local)
- **JavaScript**
- **Postman** (testes manuais da API)

## 📁 Estrutura do Projeto

```
sghss-backend/
├── database/         # Migrations e conexão com SQLite
├── middlewares/      # Middlewares personalizados (ex: tratamento de erros)
├── models/           # Requisições ao banco de dados (CRUD)
├── index.js          # Ponto de entrada da aplicação
├── package.json      # Dependências e scripts
└── .gitignore        # Arquivos/pastas ignoradas no repositório
```

## 🧪 Funcionalidades implementadas

- [x] CRUD completo de pacientes
- [x] Cadastro de hospitalizações
- [x] Validações básicas de campos
- [x] Tratamento de erros com middleware
- [x] Conexão com banco de dados local SQLite

## 🔍 Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/kaiogabs/sghss-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node index.js
   ```

4. A API estará disponível em: `http://localhost:3000`

> ⚠️ Certifique-se de que o banco de dados está configurado corretamente dentro da pasta `database`.

## 🧪 Testes

Você pode testar os endpoints utilizando ferramentas como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

## 📌 Observações

Este projeto foi desenvolvido como parte da avaliação final da disciplina. O repositório tem como objetivo demonstrar as práticas de backend aprendidas durante o semestre.

## 📎 Documentos complementares

- Diagrama Entidade Relacionamento (DER)
- Documento PDF do projeto (trilha Back-End)
- Plano de testes
