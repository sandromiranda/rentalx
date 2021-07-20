import { Response, Request } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


class ImportCategoryController {
    constructor(private importCategorUseCase: ImportCategoryUseCase) {};
    handle(request: Request, response: Response): Response {
        const { file } = request;
        
        this.importCategorUseCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };