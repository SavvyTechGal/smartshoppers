import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';
import { GameComponent } from './game/game.component';
import { GameInputComponent } from './game-input/game-input.component';
import { TravelComponent } from './travel/travel.component';
import { WorkComponent } from './work/work.component';
import { CoderComponent } from './coder/coder.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'game', component: GameComponent },
  { path: 'game-input', component: GameInputComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'work', component: WorkComponent },
  { path: 'coder', component: CoderComponent },
  { path: 'graphics', component: GraphicsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent},
  { 
    path: 'signupform', 
    component: SignupFormComponent,
    canActivate:[AuthGuard] 
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
