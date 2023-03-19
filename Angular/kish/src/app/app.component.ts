import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kish';
  @Input() data = 0;
  constructor() {}

  ngOnInit() {
    this.data += 10;
  }
  changeFromParent() {
    this.data += 1;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  ngDoCheck() {
    console.log('hit');
  }
}
