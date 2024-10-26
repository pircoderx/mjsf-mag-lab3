import type {AxiosInstance} from "axios";
import type {User} from "@/types";
import type {Readable, Editable, Createable, Deleteable} from "@/services/types";
import {UserModel} from "@/models/User.model";

export class UsersService implements Readable<User>, Createable<User>, Deleteable<User>, Editable<User> {

    constructor(public httpClient: AxiosInstance) {
    }

    async get(params: any): Promise<User[]> {
        const response = await this.httpClient.get<User[]>('/users', {params});
        return response.data.map((User) => new UserModel(User));
    }

    async getById(id: number): Promise<User> {
        const response = await this.httpClient.get<User>('/users', {params: {id}});
        return new UserModel(response.data);
    }
    
    async create(data: User): Promise<User> {
      const response = await this.httpClient.post<User>('/users', data);
      return new UserModel(response.data);
    }
    
    async edit(id: number, data: User): Promise<T> {
      const response = await this.httpClient.put<User>('/users', data, {params: {id}});
      return new UserModel(response.data);
    }
    
    async delete(id: number): Promise<T> {
      const response = await this.httpClient.delete<User>('/users', {params: {id}});
      return new UserModel(response.data);
    }
}
