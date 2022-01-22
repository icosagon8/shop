import { Injectable } from '@angular/core';

import { Category, CoverType, ProductModel, Type } from '../../shared/models/shared.models';

const PRODUCTS: ProductModel[] = [
  {
    id: 1,
    name: 'The Lord of the Rings',
    description:
      'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.',
    price: 20,
    category: Category.Fantasy,
    isAvailable: true,
    types: [Type.Printed, Type.Audio],
    coverTypes: [CoverType.Hardcover, CoverType.Softcover],
  },
  {
    id: 2,
    name: 'The Adventures of Sherlock Holmes',
    description:
      'It shadows the experiences of detective Sherlock Holmes, an enigmatic genius, as he tries to unravel the mystery of each investigation he partakes in.',
    price: 15,
    category: Category.Detective,
    isAvailable: true,
    types: [Type.Printed, Type.Electronic],
    coverTypes: [CoverType.Hardcover],
  },
  {
    id: 3,
    name: 'Around the World in 80 Days',
    description:
      'If you had a spare 80 days, what would you do with it? Phileas Fogg and his valet Passepartout decided to use the time to circumnavigate the world.',
    price: 10,
    category: Category.Adventure,
    isAvailable: false,
    types: [Type.Printed],
    coverTypes: [CoverType.Softcover],
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(): Promise<ProductModel[]> {
    return Promise.resolve(PRODUCTS);
  }
}
