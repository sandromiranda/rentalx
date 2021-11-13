import { ICreatedRentalDTO } from "../dtos/ICreatedRentalDTO";
import { Rental } from "../infra/typeorm/entities/Rental";

interface IRentalsRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental>;
    findOpenRentalByUser(user_id: string): Promise<Rental>;
    create(data: ICreatedRentalDTO): Promise<Rental>;
}

export { IRentalsRepository };
