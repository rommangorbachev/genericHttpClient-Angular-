import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GenericHttpClientService} from "../../services/generic-http-client.service";
import {ProductsHTTPContext} from "../../models/httpContext";

interface Product {
  id: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products$: Observable<Product[]> | undefined;

  private genericHttpService: GenericHttpClientService = inject(GenericHttpClientService);

  public loadProducts() {
    this.products$ = this.genericHttpService.retrieve<Product[]>(ProductsHTTPContext.GetProducts);
  }

}
