import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { AuthFormComponent} from './components/auth-form/auth-form.component';
import { AuthService } from './services/auth.service';
import { ItemService } from './services/items.service';

const routes: Routes = [
  { path: '',  component: HomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
