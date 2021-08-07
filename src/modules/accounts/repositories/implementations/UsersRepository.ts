
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {

    create(data: ICreateUserDTO): Promise<void> {
        throw new Error("Method not implemented");
    }
}


export { UsersRepository }