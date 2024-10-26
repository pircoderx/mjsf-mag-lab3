import type {Product} from "@/types";
import {BaseModel} from "@/models/base.model";

export class ProductModel extends BaseModel implements Product {
    title: string;
    price: number;
    description: string;
    categoryId:	number;
    images:	string;

    constructor(data: Product) {
        super(data);
        this.init(data);
    }
}
