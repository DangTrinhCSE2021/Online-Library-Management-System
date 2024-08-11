export type User = {
    id: string;
    name: string;
    createdDate: Date;
    email: string;
    password: string;
};

export type Material = {
    uid: string;
    title: string;
    abstraction: string;
    author: string;
    published_date: Date;
    last_checkout: Date;
    categories: string[];
};

export type Category = {
    id: string;
    name: string;
};

export type Fine = {
    id: string;
    user_id: string;
    material_id: string;
    amount: number;
    due_date: Date;
};