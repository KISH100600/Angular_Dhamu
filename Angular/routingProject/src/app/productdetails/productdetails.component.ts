import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products as productArray } from '../arrays';
import { UserService } from '../user.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent {
  product: Product | undefined;
  products: Product[] = productArray;

  productsData: Product[] = [];
  constructor(private route: ActivatedRoute, private cart: UserService) {}
  ngOnInit() {
    // First get the product id from the current route.
    console.log(this.route.snapshot.paramMap);

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const productDetailsFromRoute = String(routeParams.get('name'));

    // Find the product that correspond with the id provided in route.
    this.product = this.products.find(
      (product) => product.id === productIdFromRoute
    );
    const finded = this.products.find(
      (product) => product.id === productIdFromRoute
    );
    this.productsData = this.products.filter(
      (product) => product.details === productDetailsFromRoute
    );
    console.log(this.productsData, finded);
  }
}
