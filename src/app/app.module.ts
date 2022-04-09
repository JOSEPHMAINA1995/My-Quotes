import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { QuotesComponent } from './quotes/quotes.component';
import { LineComponent } from './line/line.component';
import { InfoComponent } from './info/info.component';
import { FormCardComponent } from './form-card/form-card.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    FormComponent,
    ButtonComponent,
    CardComponent,
    QuotesComponent,
    LineComponent,
    InfoComponent,
    FormCardComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
