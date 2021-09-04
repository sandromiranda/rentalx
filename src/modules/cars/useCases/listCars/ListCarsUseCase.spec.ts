import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase"


let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("List Cars", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    })

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "carro com espaço",
            daily_rate: 110.0,
            license_plate: "CEF-1234",
            file_amount: 40,
            brand: "Car_brand",
            category_id: "asjgpaohigo239tr02t0",
        })
        const cars = await listCarsUseCase.execute();

        expect(cars).toEqual([car]);

    });

    it("should be able to list all available cars by name", () => {

    })
})