import {HttpContextToken} from "@angular/common/http";

export enum ProductsHTTPContext {
  GetProducts = 'GetProducts',
  CreateProduct = 'CreateProduct',
}

export enum CategoriesHTTPContext {
  GetCategories = 'GetCategories',
  CreateCategory = 'CreateCategory',
}

export const routeMapping: { [key: string]: (args?: { [key: string]: string | number }) => string } = {
  GetProducts: () => {
    return "/products";
  },
  CreateProduct: () => {
    return "/product";
  },

  GetCategories: (ids?: { [key: string]: string | number }) => {
    return `/products/${ids?.["categoryId"]}/categories`;
  },
}

export const ReqType = new HttpContextToken<string>(() => '');
