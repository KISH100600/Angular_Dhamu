import { Component } from '@angular/core';

@Component({
  selector: 'app-first-kish',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  userData = [
    { name: 'kish', color: 'red', age: 10, address: 'chennai' },
    { name: 'user 1', color: 'orange', age: 10, address: 'trichy' },
    { name: 'user 2', color: 'yellow', age: 30, address: 'london' },
    { name: 'user 3', color: 'pink', age: 50, address: 'USA' },
    { name: 'user 4', color: 'blue', age: 60, address: 'srilanka' },
    { name: 'user 5', color: 'green', age: 60, address: 'srilanka' },
    { name: 'user 6', color: 'brown', age: 60, address: 'srilanka' },
    { name: 'user 7', color: 'orange', age: 60, address: 'srilanka' },
    { name: 'user 8', color: 'red', age: 60, address: 'srilanka' },
  ];
  name = 'Kishore';
}
