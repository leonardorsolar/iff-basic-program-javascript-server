# iff-basic-program-javascript-server

Como rodar seu backend com Node.js + TypeScript + Express

Este tutorial vai te ensinar a clonar, instalar e executar o projeto backend usando Node.js com TypeScript e Express. Essa parte será a base para conectar ao frontend que vimos na Parte 2, onde registramos usuários.

Repositório: [https://github.com/leonardorsolar/iff-basic-program-javascript-server](https://github.com/leonardorsolar/iff-basic-program-javascript-server)

---

## 📦 1. Pré-requisitos

Antes de começar, certifique-se que seu computador tenha:

- **Node.js instalado** (recomenda-se versão 18+): [https://nodejs.org/](https://nodejs.org/)

- **Git instalado**: [https://git-scm.com/](https://git-scm.com/)

---

## ⬇️ 2. Clonar o projeto do GitHub

Abra o terminal (Prompt de comando, PowerShell ou Git Bash) e execute o comando:

```bash
git clone https://github.com/leonardorsolar/iff-basic-program-javascript-server.git
```

Isso vai copiar o projeto para sua máquina, criando uma pasta `iff-basic-program-javascript-server`.

---

## 📁 3. Entrar na pasta do projeto

Digite no terminal:

```bash
cd iff-basic-program-javascript-server
```

Agora você está dentro da pasta com o código do backend.

---

## 📦 4. Instalar as dependências

Para instalar todas as bibliotecas necessárias (Express, TypeScript, nodemon, etc), execute:

```bash
npm install
```

Esse comando lê o arquivo `package.json` e instala tudo que o projeto precisa.

---

## 🚀 5. Executar o backend

Para rodar o servidor local em modo de desenvolvimento, com reinício automático em caso de alteração, use:

```bash
npm run start
```

Você verá no terminal a mensagem:

```
Servidor rodando na porta 3000
```

Isso significa que o backend está funcionando.

---

## 🌐 6. Testar a aplicação no navegador

- Acesse no navegador o endereço:

```
http://localhost:3000/
```

Você verá:

```
Olá, Mundo! Bem-vindo ao Express com TypeScript.
```

- Para acessar a rota que retorna os dados de usuário simulado, acesse:

```
http://localhost:3000/usuario
```

Você verá o seguinte JSON:

```json
{
  "nome": "leonardo",
  "email": "leo@gmail.com",
  "senha": "123456"
}
```
