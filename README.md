# Getting started with the Rentx app

## Steps to follow


1 - Clone this repository

### `git clone https://github.com/sandromiranda/rentalx.git`


2 - Navigate to the rentalx folder and use yarn or npm to install all node modules

### `yarn install or npm install`


3 - Make sure you have [Docker](https://docs.docker.com/get-docker/) and Docker-compose installed. The command below will build and run the rentx image (reading the info from 'docker-compose.yml')

### `docker-compose up -d`


4 - To verify the container logs, run:

### `docker logs rentx -f`


5 - The next command should run the migrations to build the postgres DB

### `yarn typeorm migration:run`


6 - In order to manage the application, let's run the command below to create the user admin - more details in the admin.ts file

### `yarn seed:admin`



# Cadastro de carro
**RF** 
Deve ser possível cadastrar um novo carro.
**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado por padrão com disponibilidade.
O usuário responsável pelo cadastro deve ser um administrador.


# Listagem de carros
**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema.


# Cadastro de especificação no carro
**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.
**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de imagens do carro
**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o multer para upload dos arquivos.
**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de carros
**RF**
Deve ser possível cadastrar um aluguel.
**RNF**
**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
