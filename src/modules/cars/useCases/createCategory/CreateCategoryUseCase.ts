import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IReq {
   name: string;
   description: string;
}

class CreateCategoryUseCase {
   constructor(private categoriesRepository: ICategoriesRepository) {}
   execute({ description, name }: IReq): void {
      const categoryAlreadyExists = this.categoriesRepository.findByName(name);

      if (categoryAlreadyExists) {
         throw new Error("Category already exists!");
      }

      this.categoriesRepository.create({ name, description });
   }
}

export { CreateCategoryUseCase };
