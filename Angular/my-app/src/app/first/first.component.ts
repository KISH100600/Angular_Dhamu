import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first-parent',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  constructor() {}
  @Input() data = 0;
  @Input() data1 = 0;

  ngOnInit() {
    this.data = 1;
    console.log('the component got inited');
  }
  changeData() {
    this.data += 1;
  }
  ngOnChanges(data: SimpleChanges) {
    console.log('Onchanges work', data);
  }
  ngDoCheck(change: SimpleChanges) {
    console.log('data1   has changed to ->' + change);
  }
  onVoted(agreed: boolean) {
    if (agreed) {
      this.data++;
    } else {
      this.data1++;
    }
  }
}
