import { Request, Response } from "express";
import { BrandRepository } from "../repositories/BrandRepository";

export default {
  async create(request: Request, response: Response) {
    const brandRepository = new BrandRepository();
    const { name, logo } = request.body;

    const brand = brandRepository.create({ name, logo });

    return response.json({ brand });
  },
};
