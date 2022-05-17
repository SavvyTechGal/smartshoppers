import { Component, NgModule } from '@angular/core';
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
import { OsComponent } from './os/os.component';
import { SeveralAppsComponent } from './several-apps/several-apps.component';
import { BudgetComponent } from './budget/budget.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { CompletionComponent } from './completion/completion.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { DevQuizComponent } from './single-view/dev-quiz/dev-quiz.component';
import { BudgetRangeComponent } from './single-view/budget-range/budget-range.component';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';

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
  { 
    path: 'products', 
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'services', component: ServicesComponent},
  { path: 'os', component: OsComponent},
  { path: 'several-apps', component: SeveralAppsComponent},
  { path: 'budget', component: BudgetComponent},
  { path: 'user-role', component: UserRoleComponent},
  { path: 'completion', component: CompletionComponent},
  { path: 'single-view', component: SingleViewComponent},
  { path: 'dev-quiz', component: DevQuizComponent},
  { path: 'budget-range', component: BudgetRangeComponent},
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
