import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home3Component } from './home3/home3.component';
const routes : Routes=[
 
  {path:'Home', component:Home3Component} ,
  {path:'MainMenu', component:Home1Component} ,
  {path:'MainHome', component:HomeComponent},
  {path:'**',redirectTo:'/MainMenu'}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    Home3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
