import { client } from "./client";
import { IProduct } from "../../domain/models/product";
import { ICreateProductDTO } from "../../domain/dtos/createProduct";
import { IApiResponse } from "../../domain/dtos/apiResponse";

export const api = {
  async getProducts(): Promise<IProduct[]> {
    const response = await client.get<IApiResponse<IProduct[]>>("/products");
    return response.data.results;
  },
  async createProduct(data: ICreateProductDTO): Promise<void> {
    await client.post("/products", data);
  },
};
