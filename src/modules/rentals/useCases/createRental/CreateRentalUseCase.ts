import { AppError } from "@shared/errors/AppError";


interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
}


class CreateRentalUseCase {

    constructor(
        private rentalsRepository: IRentalsRepository
    )

    async execute({
        user_id,
        car_id,
        expected_return_date
    }: IRequest): Promise<void> {
        // cannot create a new rental for a car that is already rented
        const carUnavailable = await this.rentalsRepository.findByCar(car_id);

        if(carUnavailable) {
            throw new AppError("Car is not available")
        }
    }
}

export { CreateRentalUseCase }