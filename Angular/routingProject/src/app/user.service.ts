import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './arrays';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  items: Product[] = [];
  addToCart(product: Product) {
    if (this.items.filter((a) => a.id === product.id).length) {
      alert('item is already avaiulable');
    } else {
      this.items.push(product);
      window.alert('Your product has been added to the cart!');
    }
  }

  getItems() {
    return this.items;
  }
  getProductData() {
    return this.http.get<Product[]>(
      'https://jsonplaceholder.typicode.com/users',
      {
        observe: 'body',
        responseType: 'json',
      }
    );
  }
  login(data: any) {
    console.log(data);

    return this.http
      .get<Product[]>(
        `http://13.126.240.130:3001/api/auth/login?email=${data.name}&password=${data.password}`,
        {
          observe: 'body',
          responseType: 'json',
          headers: { Authorzation: 'djjd' },
        }
      )
      .subscribe((a: any) => console.log('working'));
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
