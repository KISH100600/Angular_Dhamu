import { Component } from '@angular/core';
import { Product } from '../arrays';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cart: UserService) {}
  cartDetails: Product[] = [];
  ngOnInit() {
    this.cartDetails = this.cart.getItems();
  }
}
