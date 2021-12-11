import { Category, Type, CoverType } from '../../shared/models/shared.models';

export interface ProductModel {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  types: Type[];
  coverTypes: CoverType[];
}
