import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LlamadaApiProductsService {

  apiURL = 'https://productos-dio-project-default-rtdb.firebaseio.com/productos.json';

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(this.apiURL);
  }
}
