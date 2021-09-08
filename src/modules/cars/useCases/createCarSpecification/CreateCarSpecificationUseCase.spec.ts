import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car specification", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory);
    });

    it("should not e able to add a new specification to a non-existing car", async () => {
        expect( async () => {
            const car_id = "1234";
            const specifications_id = ["54321"];
    
            await createCarSpecificationUseCase.execute({ 
                car_id, 
                specifications_id 
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able to add a new specification to the car", async () => {
        const car_id = "1234";
        const specifications_id = ["54321"];

        await createCarSpecificationUseCase.execute({ car_id, specifications_id });
    });
})