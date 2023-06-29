<h1 align="center">POC - Lista</h1>

## ✅  &nbsp;Requisitos
- [x]  Configurar o TypeScript.
- [x]  Criar uma API com Node + Express + TypeScript.
- [x]  Fazer um **CRUD** com persistência no banco → TypeScript + Postgres.
- [x]  Validar em tempo de execução a entrada do usuário (ou seja, usar o JOI).
- [x]  Seguir as regras de arquitetura (routers, controllers, services, etc).
<hr/>

## ☑️ &nbsp;Rotas
POST: /lista
GET: /lista
DELETE: /lista/:id
PUT: /lista/:id
<hr/>

## 🚀 &nbsp;Banco de Dados

CREATE TABLE shopping_list (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pendente', 'comprado'))
);
<hr/>

## 🛠 &nbsp;Skills
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

## 💬 &nbsp;Contact
<img align="left" src="https://avatars.githubusercontent.com/curtyraissa?size=100">

Feito por [Raissa Curty](https://github.com/curtyraissa)!

<a href="https://www.linkedin.com/in/raissa-curty/" target="_blank">
    <img style="border-radius:50%;" src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
</a>&nbsp;