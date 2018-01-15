import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { QuoteComponent } from './quote/quote.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    QuoteComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
