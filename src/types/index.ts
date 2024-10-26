export interface Category {
    id: number
    name: string
    image: string
}

export interface User {
    email: string
    name: string
    password: string
    role: string
    avatar: string
}

export interface Product {
    title: string
    price: number
    description: string
    categoryId:	number
    images:	string
}

