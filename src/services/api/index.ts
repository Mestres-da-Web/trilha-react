import { client } from "./client";
import { IProduct } from "../../domain/models/product";
import { IUser } from "../../domain/models/user";
import { IBrand } from "../../domain/models/brand";
import { ICreateProductDTO } from "../../domain/dtos/createProduct";
import { ICreateUserDTO } from "../../domain/dtos/createUser";
import { ILoginResponse } from "../../domain/models/loginResponse";
import { IApiResponse } from "../../domain/dtos/apiResponse";
import { ILoginDTO } from "../../domain/dtos/login";

export const api = {
  async getProducts(): Promise<IProduct[]> {
    const response = await client.get<IApiResponse<IProduct[]>>("/products");
    return response.data.results;
  },
  async createProduct(data: ICreateProductDTO): Promise<void> {
    await client.post("/products", data);
  },
  async deleteProduct(id: string): Promise<void> {
    await client.delete(`/products/${id}`);
  },
  async getBrands(): Promise<IBrand[]> {
    const response = await client.get<IApiResponse<IBrand[]>>("/brands");

    return response.data.results;
  },
  async createUser(data: ICreateUserDTO): Promise<IUser> {
    const response = await client.post<IUser>("/users", data);

    return response.data;
  },
  async login(data: ILoginDTO): Promise<ILoginResponse> {
    const response = await client.post<ILoginResponse>("/session", data);

    return response.data;
  },
};
