# Cooking Blog 

É um sistema back-end criado com o objetivo aprender os princípios de construção de um sistema um back-end. A ideia baseia-se em um blog de culinária, onde há 3 níveis de usuário sendo eles: administração, publicadores e leitores.

## Instalação

Clone o projeto

```bash
  git clone https://github.com/bezlima/cooking_blog.git
```
Entre na pasta
```bash
  cd cooking_blog
```
Atualize o projeto
```bash
  npm install
```
Rode o projeto
```bash
  npm run dev
```
## Documentação

#### Retorna lista de usuários

```http
  GET /api/user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. |
| `nickName` | `string` | **Obrigatório**. |
| `role` | `number` | **Obrigatório**. (0, 1 ou 2) |

- Os parâmetros passados devem pertecer ao usuário que está fazendo a requisição.

---
#### Adiciona novo usuário
```http
  POST /api/user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. |
| `email` | `string` | **Obrigatório**. |
| `nickName` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |
| `role` | `number` | **Obrigatório**. (0, 1 ou 2) |

- Os parâmetros devem pertencer ao usuário que deseja adicionar.

---
#### Retorna um usuário

```http
  GET /api/user/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|    |  | **Não recebe parâmetro**. |

---

#### Edita um usuário

```http
  POST /api/user/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. |
| `nickName`      | `string` | **Obrigatório**. |
| `password`      | `string` | **Obrigatório**. |
| `role`      | `number` | **Obrigatório**. (0, 1 ou 2) |

- O email é um parâmetro protegido, portanto não é editável. 

---

#### Deleta um usuário

```http
  DELETE /api/user/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. |
| `nickName`      | `string` | **Obrigatório**. |
| `role`      | `number` | **Obrigatório**. (0, 1 ou 2) |

- Os parâmetros passados devem pertecer ao usuário que está fazendo a requisição.

---

#### Obtem lista de postagens

```http
  GET /api/post
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|    |  | **Não recebe parâmetro**. |

---

#### Cadastra uma postagem

```http
  POST /api/post
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `number` | **Obrigatório**. |
| `userNickName`      | `string` | **Obrigatório**. |
| `title`      | `string` | **Obrigatório**.|
| `ingredients`      | `string` | **Obrigatório**.|
| `postContent`      | `string` | **Obrigatório**.|

- A postagem deve ser realizada por um publicador ou administrador.

---

#### Retorna uma postagem

```http
  GET /api/post/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|    |  | **Não recebe parâmetro**. |

---

#### Edita uma postagem

```http
  POST /api/post/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `number` | **Obrigatório**. |
| `userNickName`      | `string` | **Obrigatório**. |
| `title`      | `string` | **Obrigatório**.|
| `ingredients`      | `string` | **Obrigatório**.|
| `postContent`      | `string` | **Obrigatório**.|

- Os parametros userId e userNickName não são editáveis.

---

#### Exclui uma postagem

```http
  DELETE /api/post/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|    |  | **Não recebe parâmetro**. |


## Autores

- [@bezlima](https://github.com/bezlima)


## Stack utilizada

- Node
- Express 
- TypeScript


## Melhorias

#### Próximas etapas:

- Validação se o usuário que está excluindo o post ou o usuário é o  próprio usuário a quem pertence ou um administrador

- Administração com o banco de dados

#### Extras:

- Lógica de login

- Implementação do JWT

- Adicionar validações em JWT
