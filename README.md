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

---

## 🧠 7. Entendendo o código principal

- **index.ts** Cria o servidor Express, define rotas `/` e `/usuario`, e escuta na porta 3000. Usa a classe `Usuario` para organizar dados do usuário.

- **modelos/Usuario.ts** Define a classe `Usuario` com os atributos `nome`, `email` e `senha` e métodos para acessar/modificar esses dados.

---

## 🧰 8. Scripts disponíveis no package.json

```json
"scripts": {
  "start": "nodemon",               // Roda o servidor com reinício automático
  "build": "tsc",                   // Compila o TypeScript em JavaScript
  "start:prod": "node dist/index.js", // Roda o backend compilado para produção
  "test": "jest"                    // Roda testes (não usado ainda)
}
```

---

## 💡 9. Dicas para você

- Sempre rode `npm install` ao baixar um projeto novo.
- Use `npm run start` para desenvolver, assim o servidor reinicia automaticamente ao salvar arquivos.
- Se quiser compilar o TypeScript manualmente, rode `npm run build`.
- Quando o projeto estiver pronto para produção, use `npm run start:prod`.

---

http://localhost:3005/api-docs/

## 🔗 Próximo passo: conectar esse backend com um frontend

Front end se encontra na parte 2: Parte 2: Projeto Frontend para Registrar Usuário

Agora que você já sabe rodar o backend com Express + TypeScript, o próximo passo será conectar esse backend com um frontend.

Na **Parte 2** do nosso curso, vamos criar a interface para o usuário registrar seu cadastro, enviando os dados para esse servidor backend.

Você aprenderá como:

- Criar formulários HTML para registrar usuário.
- Fazer requisições HTTP para o backend.
- Exibir respostas e mensagens para o usuário.

---

Assim, você terá o ciclo completo: **Frontend + Backend trabalhando juntos!**

---

Claro! Aqui está o tutorial **Parte 5**, focado em arquitetura de software e organização do backend em camadas, para ajudar o aluno a entender e aplicar boas práticas, deixando o projeto mais escalável e fácil de manter.

---
