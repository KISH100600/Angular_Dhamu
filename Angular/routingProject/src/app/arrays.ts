import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RouterModule, Route } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export interface Product {
  name: string;
  id: number;
  details: string;
  price: number;
  username?: string;
  phone?: string;
}

export const products: Product[] = [
  { details: 'E-gadget', price: 1000, name: 'phone', id: 1 },
  { details: 'E-gadget', price: 1000, name: 'laptop', id: 2 },
  { details: 'Electronic', price: 1000, name: 'tv', id: 3 },
  { details: 'Electronic', price: 1000, name: 'ac', id: 4 },
  { details: 'E-gadget', price: 1000, name: 'mouse', id: 5 },
];

// export interface MyRoute extends Route {
//   data: {
//     resourceName: string;
//   };
// }

export const Routes: Route[] = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductlistComponent,
    children: [
      {
        path: 'productDetails/:productId/:name',
        component: ProductdetailsComponent,
      },
      {
        path: ':name/:productId/:name',
        component: ProductdetailsComponent,
      },
    ],
  },
  {
    path: 'viewCart',
    component: CartComponent,
  },
];
