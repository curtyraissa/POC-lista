<h1 align="center">POC - Lista de Compras</h1>
Projeto de POC (proof of concept) em TypeScript com o tema de uma lista de compras.
<br></br>

## 💻 &nbsp;Como Usar

### Pré-requisitos

Necessário ter o Node.js instalado na máquina, bem como um banco de dados PostgreSQL configurado e acessível.

### Configurando o Banco de Dados

1. Execute o seguinte comando SQL para criar a tabela de lista de compras no banco de dados:

```sql
CREATE TABLE shopping_list (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pendente', 'comprado'))
);
```
2. Certifique-se de ter as configurações de conexão do banco de dados corretas em seu projeto, como host, porta, usuário, senha e nome do banco de dados. Você pode configurá-las no arquivo database.ts.

3. Crie o arquivo .env e configure as variáveis de ambiente necessárias, como a chave de acesso ao banco de dados.

### Instalando as Dependências
  - git clone https://github.com/seu-usuario/POC-lista.git
  - cd POC-lista
  - npm install

### Compilando o Projeto
Para compilar o código TypeScript em JavaScript, execute o seguinte comando:
   - npm run build

### Rodando o projeto
Para iniciar o servidor, execute o seguinte comando:
 - npm run dev

 ### Testando o projeto
 Para testar o código, execute o seguinte comando:
 - npm test

<hr/>

## ✅  &nbsp;Sobre
  - Configuração do TypeScript.
  - Criação de uma API com Node.js + Express + TypeScript.
  - Operações CRUD com persistência no banco de dados PostgreSQL.
  - Validação em tempo de execução das entradas do usuário usando JOI.
  - Adoção de práticas de arquitetura, incluindo roteadores, controladores, serviços, etc.
<hr/>

## ☑️ &nbsp;Rotas
- POST: /lista - Cria um novo item na lista de compras.
- GET: /lista - Obtém todos os itens da lista de compras.
- DELETE: /lista/:id - Exclui um item da lista de compras com base no ID.
- PUT: /lista/:id - Atualiza o status de um item na lista de compras com base no ID.
<hr/>

## 🛠 &nbsp;Tecnologias
<div align="center">
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="node logo"  />
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />   
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="js logo"  />      
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"  />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" height="40" width="52" alt="npm logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" />                                   
</div>
<hr/>

## 💬 &nbsp;Contatos
<img align="left" src="https://avatars.githubusercontent.com/curtyraissa?size=100">

Feito por [Raissa Curty](https://github.com/curtyraissa)!

<a href="https://www.linkedin.com/in/raissa-curty/" target="_blank">
    <img style="border-radius:50%;" src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
</a>&nbsp;
