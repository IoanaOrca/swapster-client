import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ItemCreatePageComponent } from './pages/item-create-page/item-create-page.component';
import { ItemDetailPageComponent } from './pages/item-detail-page/item-detail-page.component';
import { UserReviewPageComponent } from './pages/user-review-page/user-review-page.component';
import { ItemEditPageComponent } from './pages/item-edit-page/item-edit-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { AuthFormComponent} from './components/auth-form/auth-form.component';
import { AuthService } from './services/auth.service';
import { ItemService } from './services/items.service';
import { UserService } from './services/user.service';

import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { UserReviewFormComponent } from './components/user-review-form/user-review-form.component';
import { UserRequestsComponent } from './pages/user-requests/user-requests.component';

import { AppComponent } from './app.component';

import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';



const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [InitAuthGuardService]},
  { path: 'items/add', component: ItemCreatePageComponent,  canActivate: [RequireUserGuardService]},
  { path: 'items/:id', component: ItemDetailPageComponent, canActivate: [RequireUserGuardService]},
  { path: 'items/:id/edit', component: ItemEditPageComponent , canActivate: [RequireUserGuardService]},
  { path: 'profile/:id', component: ProfilePageComponent, canActivate: [RequireUserGuardService]},
  { path: 'profile/:id/reviews', component: UserReviewPageComponent , canActivate: [RequireUserGuardService]},
  { path: 'profile/:id/requests', component: UserRequestsComponent , canActivate: [RequireUserGuardService]},
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
    ItemCardComponent,
    ItemDetailPageComponent,
    ItemEditPageComponent,
    ProfilePageComponent,
    UserRequestsComponent,
    UserReviewPageComponent,
    UserReviewFormComponent
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
    RequireUserGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
