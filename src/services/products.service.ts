import type {AxiosInstance} from "axios";
import type {Product} from "@/types";
import type {Readable, Editable, Createable, Deleteable} from "@/services/types";
import {ProductModel} from "@/models/product.model";

export class ProductsService implements Readable<Product> {

    constructor(public httpClient: AxiosInstance) {
    }

    async get(params: any): Promise<Product[]> {
        const response = await this.httpClient.get<Product[]>('/products', {params});
        return response.data.map((product) => new ProductModel(product));
    }

    async getById(id: number): Promise<Product> {
        const response = await this.httpClient.get<Product>('/products', {params: {id}});
        return new ProductModel(response.data);
    }
    
    async create(data: Product): Promise<Product> {
      const response = await this.httpClient.post<Product>('/products', data);
      return new ProductModel(response.data);
    }
    
    async edit(id: number, data: Product): Promise<Product> {
      const response = await this.httpClient.put<Product>('/products', data, {params: {id}});
      return new ProductModel(response.data);
    }
    
    async delete(id: number): Promise<Product> {
      const response = await this.httpClient.delete<Product>('/products', {params: {id}});
      return new ProductModel(response.data);
    }
}
