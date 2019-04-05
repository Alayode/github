import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { TopReposComponent } from './top-repos/top-repos.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, TopReposComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
