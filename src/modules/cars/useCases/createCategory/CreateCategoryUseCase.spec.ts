import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create a category", () => {

    // this is used so you don't have to use the data from database
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    })
    
    it("should be able to create a new category", async () => {
        const category = {
            name: "Category Test",
            description: "Category description test",
        }

        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description,
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(
            category.name
        );

        expect(categoryCreated).toHaveProperty("id");
    });

    it("should not be able to create a new category with the same name", async () => {
        
        expect(async () => {
            const category = {
                name: "Category Test",
                description: "Category description test",
            }
    
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
    
            // this is intentional - to attempt create a category with the same name - it neeeds to return an error
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
        }).rejects.toBeInstanceOf(AppError);

    });

});