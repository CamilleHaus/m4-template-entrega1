import { IProduct, IProductClass, IErrorMessage } from "./interfaces";

class ProductList implements IProductClass {
    private productList: IProduct[] = [];
    id = 1;

    createProduct(data: { name: string; price: number; }): IProduct {
        const newProduct: IProduct = {
            id: this.id,
            name: data.name,
            price: data.price,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        this.productList.push(newProduct);

        this.id++;

        return newProduct;
    }

    getProducts(): IProduct[] {
        return this.productList;
    }

    getOneProduct(id: number): IProduct | undefined {
        return this.productList.find((product) => id === product.id)
    }

    updateProduct(id: number, data: Partial<{ name: string; price: number; }>): IProduct | undefined {
        const currentProduct = this.productList.find((product) => id === product.id);

        if(!currentProduct) {
            return undefined
        }

        const updatedProduct: IProduct = {
            ...currentProduct,
            ...data,
            updatedAt: new Date(),
        }

        const index = this.productList.findIndex((product) => id === product.id)

        this.productList.splice(index, 1, updatedProduct);

        return updatedProduct;
    }

    deleteProduct(id: number): IErrorMessage {
        const index = this.productList.findIndex(product => id === product.id);

        this.productList.splice(index, 1);

        return { message: "Product successfully deleted."}
    }

}

export const productList = new ProductList();