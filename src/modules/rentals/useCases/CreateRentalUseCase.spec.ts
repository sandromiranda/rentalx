import { AppError } from "@shared/errors/AppError";
import { RentalsRepositoryInMemory } from "../repositories/in-memory/RentalsRepositoryInMemory"
import { CreateRentalUseCase } from "./CreateRentalUseCase"

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {

    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
    })

    it("Should be able to create a new rental", async () => {
        const rental = await createRentalUseCase.execute({
            user_id: "12345",
            car_id: "121212",
            expected_return_date: new Date(),     
        })

        console.log(rental)

        expect(rental).toHaveProperty("id")
        expect(rental).toHaveProperty("start_date")
    })

    it("Should not be able to create a new rental if there is an existing one for the user", async () => {
        
        expect(async () => {
            await createRentalUseCase.execute({
                user_id: "12345",
                car_id: "121212",
                expected_return_date: new Date(),     
            })

            await createRentalUseCase.execute({
                user_id: "12345",
                car_id: "121212",
                expected_return_date: new Date(),     
            })
        }).rejects.toBeInstanceOf(AppError)

    })

    it("Should not be able to create a new rental if there is an existing one for the car", async () => {
        
        expect(async () => {
            await createRentalUseCase.execute({
                user_id: "1234",
                car_id: "test",
                expected_return_date: new Date(),     
            })

            await createRentalUseCase.execute({
                user_id: "4321",
                car_id: "test",
                expected_return_date: new Date(),     
            })
        }).rejects.toBeInstanceOf(AppError)

    })


})