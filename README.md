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
