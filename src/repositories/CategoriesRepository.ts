import { Category } from "../model/Category";

interface ICreateCategoryDTP {
    name: string;
    description: string;
}

class CategoriesRepository {
    
    private categories: Category[] = [];

    constructor() {
        this.categories = [];
    }

    create({ description, name }: ICreateCategoryDTP): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);
    }
}

export { CategoriesRepository };