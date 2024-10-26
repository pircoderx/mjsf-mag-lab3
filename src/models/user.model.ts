import type {User} from "@/types";
import {BaseModel} from "@/models/base.model";

export class UserModel extends BaseModel implements User {
    email: string;
    name: string;
    password: string;
    role: string;
    avatar: string;

    constructor(data: User) {
        super(data);
        this.init(data);
    }
}
