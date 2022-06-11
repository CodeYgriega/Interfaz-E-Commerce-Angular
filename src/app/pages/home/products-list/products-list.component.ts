import { Component, OnInit } from '@angular/core';
import { LlamadaApiProductsService } from 'src/app/services/llamada-api-products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productos: any = [];

  constructor(private serviceApiProducts: LlamadaApiProductsService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    return this.serviceApiProducts.getProductos().subscribe((response:any) => {
      this.productos = response.productos;
      console.log(this.productos);
    })
  }

}
