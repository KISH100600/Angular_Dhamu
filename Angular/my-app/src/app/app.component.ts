import { Component } from '@angular/core';
// const image = require('../assets/first.jpg');

@Component({
  selector: 'app-root',
  // template :
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  public name = 'ui';
  private age = 10;
  loading = true;
  image =
    'https://camo.githubusercontent.com/0a16218f80a1832b5244500de2367b6985e2077efc4cd1f0c71dc38a4a348740/68747470733a2f2f6a656e6b696e732e696f2f696d616765732f6c6f676f732f6a656e6b696e732f6a656e6b696e732e706e67';
  getAge() {
    return this.age;
  }
  userData: any[] = [];
  getData() {
    this.loading = false;
    this.userData = [
      { name: 'kish', age: 10, address: 'chennai' },
      { name: 'user 1', age: 10, address: 'trichy' },
      { name: 'user 2', age: 30, address: 'london' },
      { name: 'user 3', age: 50, address: 'USA' },
      { name: 'user 4', age: 60, address: 'srilanka' },
      { name: 'user 4', age: 60, address: 'srilanka' },
      { name: 'user 4', age: 60, address: 'srilanka' },
      { name: 'user 4', age: 60, address: 'srilanka' },
      { name: 'user 4', age: 60, address: 'srilanka' },
    ];
  }
  removeData() {
    this.userData = [];
  }
}
