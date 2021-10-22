import { getRepository, Repository } from "typeorm";

import { ICreatedRentalDTO } from "@modules/rentals/dtos/ICreatedRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { Rental } from "../entities/Rental";



class RentalsRepository implements IRentalsRepository{
    private repository: Repository<Rental> 

    constructor() {
        this.repository = getRepository(Rental)
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const openByCar = this.repository.findOne({ car_id })
        return openByCar
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const openByUser = this.repository.findOne({ user_id })
        return openByUser
    }
    async create({
        car_id, 
        expected_return_date, 
        user_id
    }: ICreatedRentalDTO): Promise<Rental> {
        const rental = this.repository.create({
            car_id,
            expected_return_date,
            user_id
        })

        await this.repository.save(rental)

        return rental
    }

}

export { RentalsRepository }