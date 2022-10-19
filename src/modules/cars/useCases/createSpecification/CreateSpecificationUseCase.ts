import { ISpecificationsRepository } from "../../repositories/ISpecificatiosRepository";

interface IReq {
   name: string;
   description: string;
}

class CreateSpecificationUseCase {
   constructor(private specificationsRepository: ISpecificationsRepository) {}
   execute({ name, description }: IReq): void {
      const specificationAlreadyExists =
         this.specificationsRepository.findByName(name);

      if (specificationAlreadyExists) {
         throw new Error("Specifications already exists!");
      }

      this.specificationsRepository.create({ name, description });
   }
}

export { CreateSpecificationUseCase };
