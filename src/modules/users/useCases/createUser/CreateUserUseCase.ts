import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IReq {
   name: string;
   email: string;
   password: string;
}

class CreateUserUseCase {
   constructor(private usersRepository: IUsersRepository) {}
   execute({ password, email, name }: IReq): void {
      const userAlreadyExists = this.usersRepository.findByName(name);

      if (userAlreadyExists) {
         throw new Error("User already exists!");
      }

      this.usersRepository.create({ name, email, password });
   }
}

export { CreateUserUseCase };
