export enum Category {
  Fantasy = 'Fantasy',
  Detective = 'Detective',
  Adventure = 'Adventure',
}

export enum Type {
  Audio = 'Audio',
  Electronic = 'Electronic',
  Printed = 'Printed',
}

export enum CoverType {
  Softcover = 'Softcover',
  Hardcover = 'Hardcover',
}

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  types: Type[];
  coverTypes: CoverType[];
  image: string;
}

export interface CartProductModel {
  id: number;
  name: string;
  totalSum: number;
  quantity: number;
}
