import { Request, Response } from "express";
import { container } from "tsyringe";

import { ProfileUserUseCase } from "./ProfileUserUseCase";

class ProfileUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        console.log('test1')
        const profileUserUseCase = container.resolve(ProfileUserUseCase);
        console.log('test2')

        const user = await profileUserUseCase.execute(id);
        return response.json(user);
    }
}

export { ProfileUserController }