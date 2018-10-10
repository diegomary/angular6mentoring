import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaryclientComponent } from './components/maryclient/maryclient.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChildformaryComponent } from './components/maryclient/childformary/childformary.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [   
    MaryclientComponent, ChildformaryComponent, HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MaryclientComponent]
})
export class AppModule { }
