import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appApp]',
})
export class AppDirective {
  constructor(private eleRef: ElementRef) {}
  @Input() name = 'kish';

  @HostListener('mouseover') MouseOver() {
    this.eleRef.nativeElement.style.color = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.eleRef.nativeElement.style.color = 'red';
  }
  @HostListener('click') onClick() {
    this.eleRef.nativeElement.style.color = 'red';
  }
  ngOnInit() {
    console.log(this.name);

    this.logIt('OnInit');
    this.name = 'll';
    console.log(this.name);
  }
  ngOnChange(val: any) {
    console.log(val);
  }
  logIt(msg: string) {
    console.log(` ${msg}`);
  }
}
