# Go

Guide to Project

## How to create a NodeJs Project

Use the package [yarn](https://classic.yarnpkg.com/en/docs/install) to create a NodeJs project.

```bash
yarn init -y
```
## Tools

### Express

Express includes routes bases itself in Operating System

```bash
yarn add express
```

### Nodemon

Automatically updates the server when it detects any code changes

```bash
yarn add nodemon -D
```

#### Start a Server

```bash
yarn nodemon src/index.js
```

### UUIDV4

Generates a unique id

```bash
yarn add uuidv4
```

## Scripts

#### Before

```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
}
```

#### After

```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "src/index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon"
  },
}

```

#### Start a Server

```bash
yarn dev
```



## License
[MIT](https://choosealicense.com/licenses/mit/)
