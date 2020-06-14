import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ResaltarDirective } from './Directives/resaltar.directive';
import { ContarClicksDirective } from './Directives/contar_clicks.directives';
import {Routes, RouterModule} from '@angular/router'
import { DetalleComponent } from './Detalle/detalle.component';
import { LugaresComponent } from './Lugares/lugares.component';

const appRoutes:Routes=[
  {path:'', component:LugaresComponent},
  {path:'lugares', component:LugaresComponent},
  {path:'detalle/:id', component:DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
