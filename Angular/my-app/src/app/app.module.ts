import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecComponent } from './kish/sec/sec.component';
import { FirstComponent as FirstComponentKish } from './kish/first/first.component';
import { JoshComponent } from './josh/josh.component';
import { JoshDirective } from './josh.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecComponent,
    JoshComponent,
    FirstComponentKish,
    JoshDirective,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
