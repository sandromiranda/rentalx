# Getting started with the Rentx app

## Steps to follow

Clone this repository

### git clone https://github.com/sandromiranda/react-task-tracker.git

Use yarn or npm to install all node modules

### yarn install or npm install 

Makse sure you have [Docker](https://docs.docker.com/get-docker/) installed
Run the command below to build the rentx image (reading the info from 'Dockerfile')

### docker build -t rentx .


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
Deve ser possível listar todos os carros.
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
