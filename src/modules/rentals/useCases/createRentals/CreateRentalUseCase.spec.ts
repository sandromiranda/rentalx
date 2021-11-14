import dayjs from "dayjs";

import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCase } from "./CreateRentalUseCase"

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;

describe("Create Rental", () => {
    const dayAdd24Hours = dayjs().add(1, "day").toDate()
    console.log(dayAdd24Hours)
    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        dayjsDateProvider = new DayjsDateProvider();
        createRentalUseCase = new CreateRentalUseCase(
            rentalsRepositoryInMemory,
            dayjsDateProvider
        );
    })

    it("Should be able to create a new rental", async () => {
        const rental = await createRentalUseCase.execute({
            user_id: "12345",
            car_id: "121212",
            expected_return_date: dayAdd24Hours,     
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
                expected_return_date: dayAdd24Hours,     
            })

            await createRentalUseCase.execute({
                user_id: "12345",
                car_id: "121212",
                expected_return_date: dayAdd24Hours,     
            })
        }).rejects.toBeInstanceOf(AppError)

    })

    it("Should not be able to create a new rental if there is an existing one for the car", async () => {
        
        expect(async () => {
            await createRentalUseCase.execute({
                user_id: "1234",
                car_id: "test",
                expected_return_date: dayAdd24Hours,     
            })

            await createRentalUseCase.execute({
                user_id: "4321",
                car_id: "test",
                expected_return_date: dayAdd24Hours,     
            })
        }).rejects.toBeInstanceOf(AppError)

    })

    it("Should not be able to create a new rental with invalid return time - less than 24h", async () => {
        
        expect(async () => {
            await createRentalUseCase.execute({
                user_id: "1234",
                car_id: "test",
                expected_return_date: dayjs().toDate(),     
            })
        }).rejects.toBeInstanceOf(AppError)

    })


})