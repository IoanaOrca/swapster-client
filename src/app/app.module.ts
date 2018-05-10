import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ItemCreatePageComponent } from './pages/item-create-page/item-create-page.component';


import { AuthFormComponent} from './components/auth-form/auth-form.component';
import { AuthService } from './services/auth.service';
import { ItemService } from './services/items.service';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';


const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [InitAuthGuardService]},
  { path: 'items/add', component: ItemCreatePageComponent,  canActivate: [RequireUserGuardService]},
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService]},
  { path: 'signup', component: SignupPageComponent,  canActivate: [RequireAnonGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    AuthFormComponent,
    ItemFormComponent,
    ItemCreatePageComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ItemService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
