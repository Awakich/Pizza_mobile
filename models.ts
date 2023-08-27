export type pizza = {
    id?: string,
    imageUrl: string,
    title: string,
    types: [number],
    sizes: [string],
    price: number,
    category?: number,
    description?: string,
    count: number,
}

export type pizzaInfo = {
    id?: string;
    price: number;
    title: string;
    imageUrl: string;
    types: string;
    sizes: string;
    count: number
}