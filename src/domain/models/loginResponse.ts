import { IUser } from "./user";

export interface ILoginResponse {
  user: IUser;
  access_token: string;
}
