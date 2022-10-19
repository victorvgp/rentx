import { User } from "../model/User";

interface ICreateUserDTO {
   name: string;
   email: string;
   password: string;
}

interface IUsersRepository {
   findByName(name: string): User;
   list(): User[];
   create({ name, email, password }: ICreateUserDTO): void;
}

export { IUsersRepository, ICreateUserDTO };
