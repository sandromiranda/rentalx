import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

dayjs.extend(utc);

interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
}


class CreateRentalUseCase {

    constructor(private rentalsRepository: IRentalsRepository) {}

    async execute({
        user_id,
        car_id,
        expected_return_date
    }: IRequest): Promise<Rental> {

        const minimumHour = 24;

        // cannot create a new rental for a car that is already rented
        const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

        if(carUnavailable) {
            throw new AppError("Car is not available")
        }

        // it should not be able to create a new rental in case there is already an existing one for that user
        const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id)

        if(rentalOpenToUser) {
            throw new AppError("User already have rental opened ")
        }

        // the rental must have a minimum duration of 24 hours
        const expectedReturnDateFormat = dayjs(expected_return_date).utc().local().format()
        const dateNow = dayjs().utc().local().format()

        const compare = dayjs(expectedReturnDateFormat).diff(dateNow, "hours");

        if(compare < minimumHour) {
            throw new AppError("Invalid return time")
        }

        const rental = await this.rentalsRepository.create({
            user_id,
            car_id,
            expected_return_date
        })

        return rental
    }
}

export { CreateRentalUseCase }