import { Brand, IBrand } from "../models/Brand";

export interface IBrandInput {
  name: string;
  logo: string;
}

export class BrandRepository implements Repository {
  async create(data: IBrandInput) {
    return await Brand.create({ ...data });
  }
}
