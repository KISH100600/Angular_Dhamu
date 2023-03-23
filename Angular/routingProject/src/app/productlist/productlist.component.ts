import { FormControl, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, products } from '../arrays';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent {
  constructor(
    public cartService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private coockie: CookieService
  ) {}
  shippingCosts: Product[] = [];
  filteredData: Product[] = [];
  filterElement = '';
  checkoutForm = this.formBuilder.group({
    name: '',
    password: '',
  });
  onSubmit(): void {
    this.cartService.login(this.checkoutForm.value).subscribe(
      (a: any) => {
        const token = a.headers.get('X-Auth-Token');
        this.router.navigate(['viewCart']);
        sessionStorage.setItem('token', token);
        localStorage.setItem('name', token);
        this.coockie.set('name', token);
      },
      (err: any) => {
        alert('Invalid user name or password');
      }
    );
    // alert('Successfully login');
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
  }
  // products: Product[] = products;
  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  // }
  // ngOnInit() {
  //   console.log(this.filterElement);

  //   this.cartService.getProductData().subscribe((data: Product[]) => {
  //     // console.log(data);
  //     this.shippingCosts = data;
  //   });
  // }
  // filterData() {
  //   this.filteredData = this.shippingCosts.filter((a) =>
  //     a.name.toLowerCase().includes(this.filterElement.toLowerCase())
  //   );
  // }
  // ngDoCheck() {
  //   console.log(this.shippingCosts);
  // }
  // didModify(data: any) {
  //   // console.log(JSON.stringify(data));
  //   this.filterElement = data;
  //   this.filteredData = this.shippingCosts.filter((a) =>
  //     a.name.toLowerCase().includes(data.toLowerCase())
  //   );
  // }
}
