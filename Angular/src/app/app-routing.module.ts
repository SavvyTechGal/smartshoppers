import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { HomeComponent } from './home/home.component';
// import { BrandComponent } from './brand/brand.component';
// import { GameComponent } from './game/game.component';
// import { GameInputComponent } from './game-input/game-input.component';
// import { TravelComponent } from './travel/travel.component';
// import { WorkComponent } from './work/work.component';
// import { CoderComponent } from './coder/coder.component';
// import { GraphicsComponent } from './graphics/graphics.component';
// import { MoviesComponent } from './movies/movies.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
// import { OsComponent } from './os/os.component';
// import { SeveralAppsComponent } from './several-apps/several-apps.component';
// import { BudgetComponent } from './budget/budget.component';
// import { UserRoleComponent } from './user-role/user-role.component';
import { EditQuestionnaireComponent } from './edit-questionnaire/edit-questionnaire.component';
//import { CompletionComponent } from './completion/completion.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { DevQuizComponent } from './single-view/dev-quiz/dev-quiz.component';
import { BudgetRangeComponent } from './single-view/budget-range/budget-range.component';
//import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { GamerQuizComponent } from './single-view/gamer-quiz/gamer-quiz.component';
import { DesignerQuizComponent } from './single-view/designer-quiz/designer-quiz.component';
import { StudentQuizComponent } from './single-view/student-quiz/student-quiz.component';
import { CasualQuizComponent } from './single-view/casual-quiz/casual-quiz.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },

  // { path: 'brand', component: BrandComponent },
  // { path: 'game', component: GameComponent },
  // { path: 'game-input', component: GameInputComponent },
  // { path: 'travel', component: TravelComponent },
  // { path: 'work', component: WorkComponent },
  // { path: 'coder', component: CoderComponent },
  // { path: 'graphics', component: GraphicsComponent },
  // { path: 'movies', component: MoviesComponent },
  // { path: 'login', component: LoginComponent },
  
  { path: 'about', component: AboutComponent },
  { 
    path: 'products', 
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'services', component: ServicesComponent},
  { 
    path: 'single-view', 
    component: SingleViewComponent,
    canActivate:[AuthGuard]
  },
  { path: 'dev-quiz', component: DevQuizComponent},
  { path: 'budget-range', component: BudgetRangeComponent},
  { path: 'gamer-quiz', component: GamerQuizComponent},
  { path: 'designer-quiz', component: DesignerQuizComponent},
  { path: 'student-quiz', component: StudentQuizComponent},
  { path: 'casual-quiz', component: CasualQuizComponent},
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
  },
  {
    path: 'edit-questionnaire',
    component: EditQuestionnaireComponent,
    canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
