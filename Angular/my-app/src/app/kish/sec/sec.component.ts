import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sec-kish',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css'],
})
export class SecComponent {
  @Input() data: { name: string; age: number; address: string; color: string } =
    {
      name: 'user 4',
      age: 60,
      address: 'srilanka',
      color: 'red',
    };
}
