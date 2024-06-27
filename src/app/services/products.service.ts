import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
}

type ApiResponse = {products:Product[] }

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getAll(): Promise<Product[]> {
    return firstValueFrom(
      this.httpClient.get<Product[]>('https://666c953d49dbc5d7145e8513.mockapi.io/Servicio')
    )
  }

}
