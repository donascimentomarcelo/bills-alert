## How to create project

- yarn init -y

- yarn add typescript ts-node-dev @types/node tsconfig-paths -D

- yarn tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true

## How to create .gitignore

.idea/
.vscode/
node_modules/
build/
temp/
.env
coverage
ormconfig.json
dist

uploads/*
!uploads/.gitkeep
.docker/dbdata

## How to create server.ts

- Create the src folder on the root project
- Create the server.ts file inside the src folder

## How to setup dev runner

- Add it into the package.json

"scripts": {
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts",
},


## How to setup express and cors

- yarn add express cors express-async-errors
- yarn add -D @types/express @types/cors

## Structure folder

- mkdir -p src/config
- mkdir -p src/modules
- mkdir -p src/shared/http
- mv src/server.ts src/shared/http/server.ts

## How to setup imports config

- Add it into the tsconfig.json

"paths": {
    "@config/*": ["src/config/*"],
    "@modules/*": ["src/modules/*"],
    "@shared/*": ["src/shared/*"],
}
- Uncomment line "baseUrl": "./",
## How to run the node server

 - yarn dev

## How to create a migration via typeorm

- yarn typeorm migration:create -n CreateProducts

## How to run a migration

- yarn typeorm migration:run
