import { Component, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  @Input() data: number = 0;
  constructor() {}
  ngOninit() {}
  changeFromChild() {
    this.data -= 1;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
