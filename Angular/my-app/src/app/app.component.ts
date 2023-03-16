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
  image =
    'https://camo.githubusercontent.com/0a16218f80a1832b5244500de2367b6985e2077efc4cd1f0c71dc38a4a348740/68747470733a2f2f6a656e6b696e732e696f2f696d616765732f6c6f676f732f6a656e6b696e732f6a656e6b696e732e706e67';
  // image1 = image;
  getAge() {
    return this.age;
  }
  // const fdfd = 'fdf'
}
