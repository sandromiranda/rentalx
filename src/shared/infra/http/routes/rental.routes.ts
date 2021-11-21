import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRentals/CreateRentalController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserControler } from "@modules/rentals/useCases/listRentalsByUser/ListRentalsByUserController";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController()
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserControler();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);
rentalRoutes.post(
    "/devolution/:id", 
    ensureAuthenticated, 
    devolutionRentalController.handle
);

rentalRoutes.get(
    "/user",
    ensureAuthenticated,
    listRentalsByUserController.handle
)

export { rentalRoutes }