import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"


let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("List Cars", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
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
        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);

    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "carro com espaço",
            daily_rate: 110.0,
            license_plate: "CEF-1234",
            file_amount: 40,
            brand: "Car_test",
            category_id: "asjgpaohigo239tr02t0",
        })
        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car_test",
        });

        expect(cars).toEqual([car]);

    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "carro com espaço",
            daily_rate: 110.0,
            license_plate: "CEF-1235",
            file_amount: 40,
            brand: "Car_test",
            category_id: "asjgpaohigo239tr02t0",
        })
        const cars = await listAvailableCarsUseCase.execute({
            name: "Car3",
        });

        expect(cars).toEqual([car]);

    });

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "carro com espaço",
            daily_rate: 110.0,
            license_plate: "CEF-1235",
            file_amount: 40,
            brand: "Car_test",
            category_id: "12345",
        })
        const cars = await listAvailableCarsUseCase.execute({
            category_id: "12345",
        });

        expect(cars).toEqual([car]);

    });

})