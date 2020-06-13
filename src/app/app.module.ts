import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ResaltarDirective } from './Directives/resaltar.directive';
import { ContarClicksDirective } from './Directives/contar_clicks.directives';
import {Routes} from '@angular/router'

const appRoutes:Routes=[
  {path:'', component:AppComponent},
  {path:'lugares', component:AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
