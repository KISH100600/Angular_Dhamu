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
    return this.http.get<Product[]>(
      `http://13.233.39.109:8080/api/service/rest/user/getCurrentUser`,
      {
        observe: 'response',
        responseType: 'json',
        headers: {
          Authorization: 'Basic ' + btoa(`${data.name}:${data.password}`),
        },
      }
    );
  }
  getTheUser() {
    const token = sessionStorage.getItem('token');
    return this.http.get<Product[]>(
      `http://13.233.39.109:8080/api/service/rest/user/getCurrentUser`,
      {
        observe: 'response',
        responseType: 'json',
        headers: {
          'X-Auth-Token': token ? token : '',
        },
      }
    );
  }
  getBookings() {
    const token = sessionStorage.getItem('token');
    return this.http.get<Product[]>(
      `http://13.233.39.109:8080/api/service/rest/slot/getAllVendorsBookingHistory?date=2023-03-20`,
      {
        observe: 'response',
        responseType: 'json',
        headers: {
          'X-Auth-Token': token ? token : '',
        },
      }
    );
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
