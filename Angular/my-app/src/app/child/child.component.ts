import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() childData = 1;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    // this.didVote = true;
  }
  history: SimpleChanges[] = [];
  changeChildData() {
    ['childData'];
    this.childData += 2;
  }
  ngOnChanges(change: SimpleChanges) {
    // console.log(change['currentValue']);
    console.log(change['childData']['currentValue']);
    this.history.push({
      prevousData: change['childData']['previousValue'],
      currentValue: change['childData']['currentValue'],
    });
  }
}
