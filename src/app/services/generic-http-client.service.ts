import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpContext} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReqType, routeMapping} from "../models/httpContext";

@Injectable({
  providedIn: 'root'
})
export class GenericHttpClientService {
  private http = inject(HttpClient);

  public retrieve<TModel>(context: string):Observable<TModel> {
    return this.http.get<TModel>(routeMapping[context](), {
      context: new HttpContext().set(ReqType, context)
    });
  }

  public syncDate<TModel, TDto>(
    context: string,
    dto: TDto
  ): Observable<TModel> {
    return this.http.post<TModel>(routeMapping[context](), dto, {
      context: new HttpContext().set(ReqType, context)
    })
  }

  public getById<TModel>(
    context: string,
    args: { [key: string]: string | number }
  ): Observable<TModel> {
    return this.http.get<TModel>(routeMapping[context](args), {
      context: new HttpContext().set(ReqType, context),
    });
  }
}
