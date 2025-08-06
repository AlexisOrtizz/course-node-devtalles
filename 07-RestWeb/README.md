# course-node-devtalles
Codigo fuente del curso de NodeJS de Fernando Herrera en Devtalles


* Install Node Version Manager NVM: 
> For Windows: `https://github.com/coreybutler/nvm-windows`
> Others: `https://github.com/nvm-sh/nvm`

Install version: `nvm install 18`
Select version: `nvm use 18`
Delete version: `nvm uninstall 18`


Execute nodemon: `npx nodemon src/app`

# Enviar correos:
* Mailgun
* Mailchimp
* Constant Contact

# DEV
1. Clonar el .env.template y crear el .env
2. Ejecutar el comando ```docker compose up -d```


Prisma
```
npm install prisma --save-dev
npm install @prisma/client
```
```npx prisma init --datasource-provider postgresql```
Migrate schema to db 
```npx prisma migrate dev --name init```
```npx prisma generate```


Principio de ortogonalidad:
Separar  responsabilidades.