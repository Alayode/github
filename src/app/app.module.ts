import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { TopReposComponent } from './top-repos/top-repos.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent, 
    TopReposComponent,
   

  ],
  imports: [
    // CommonModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule 
  ]
})
export class AppModule { }
