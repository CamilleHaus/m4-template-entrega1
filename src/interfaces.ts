export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IErrorMessage {
    message: string;
}

type TCreateProduct = Pick<IProduct, "name" | "price">
type TUpdateProduct = Partial<TCreateProduct>;

export interface IProductClass {
    createProduct(data: TCreateProduct): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | undefined;
    updateProduct(id: number, data: TUpdateProduct): IProduct | undefined;
    deleteProduct(id: number): IErrorMessage;
}