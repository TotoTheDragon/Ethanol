import { EthanolImage } from './EthanolImage';
import { ProductAttributes } from './ProductAttributes';
import { ProductQuantity } from './ProductQuantity';

export default class Product {
    private gtin: string | undefined;

    private name: string | undefined;

    private description: string | undefined;

    private category: string | undefined;

    private price: number | undefined;

    private images: EthanolImage[] | undefined;

    private brand: string | undefined;

    private quantity: ProductQuantity | undefined;

    private attributes: ProductAttributes | undefined;

    public getGTIN(): string | undefined {
        return this.gtin;
    }

    public getName(): string | undefined {
        return this.name;
    }

    public getDescription(): string | undefined {
        return this.description;
    }

    public getCategory(): string | undefined {
        return this.category;
    }

    public getImages(): EthanolImage[] | undefined {
        return this.images;
    }

    public getBrand(): string | undefined {
        return this.brand;
    }

    public getQuantity(): ProductQuantity | undefined {
        return this.quantity;
    }

    public getAttributes(): ProductAttributes | undefined {
        return this.attributes;
    }

    public setGTIN(gtin: string): void {
        this.gtin = gtin;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public setImages(images: EthanolImage[]): void {
        this.images = images;
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }

    public setQuantity(quantity: ProductQuantity): void {
        this.quantity = quantity;
    }

    public setAttributes(attributes: ProductAttributes): void {
        this.attributes = attributes;
    }
}
