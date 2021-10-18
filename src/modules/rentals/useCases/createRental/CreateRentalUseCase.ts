import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";


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
    }: IRequest): Promise<void> {
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
    }
}

export { CreateRentalUseCase }