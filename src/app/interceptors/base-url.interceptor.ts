import {HttpEvent, HttpInterceptorFn} from '@angular/common/http';
import {Observable} from "rxjs";
import {CategoriesHTTPContext, ProductsHTTPContext, ReqType} from "../models/httpContext";

const baseUrl: string = '';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<unknown>> => {
  const httpContexts = [
    ...Object.values(ProductsHTTPContext),
    ...Object.values(CategoriesHTTPContext),
  ];

  if (httpContexts.find(x => x === req.context.get(ReqType))) {
    const apiRequest = req.clone({
      url: `${baseUrl}${req.url}`,
    });
    return next(apiRequest)
  } else {
    return next(req)
  }
};
