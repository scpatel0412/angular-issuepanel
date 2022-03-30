import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"home",
    component:UserpanelComponent
  },
  {
    path:"admin",
    component:AdminpanelComponent
  }
]; 





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserpanelComponent,
    AdminpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
