import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HomeComponent } from './home/home.component';

const routes:Routes =[
  {path: 'table',component:DataTableComponent},
  {path: 'home',component:HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HomeComponent, // Declare your component here
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule, // Import HttpClientModule here to enable HttpClient service
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
