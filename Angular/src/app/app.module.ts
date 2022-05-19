import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { UserService } from './user.service';
import { ProductService } from './product.service';
import { AnswersService } from './answers.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditQuestionnaireComponent } from './edit-questionnaire/edit-questionnaire.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { DevQuizComponent } from './single-view/dev-quiz/dev-quiz.component';
import { BudgetRangeComponent } from './single-view/budget-range/budget-range.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { GamerQuizComponent } from './single-view/gamer-quiz/gamer-quiz.component';
import { DesignerQuizComponent } from './single-view/designer-quiz/designer-quiz.component';
import { StudentQuizComponent } from './single-view/student-quiz/student-quiz.component';
import { CasualQuizComponent } from './single-view/casual-quiz/casual-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    SignupFormComponent,
    ProfileComponent,
    LoginButtonComponent,
    NavbarComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    EditProfileComponent,
    EditQuestionnaireComponent,
    SingleViewComponent,
    DevQuizComponent,
    BudgetRangeComponent,
    GamerQuizComponent,
    DesignerQuizComponent,
    StudentQuizComponent,
    CasualQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    RecaptchaModule,
    RecaptchaFormsModule,
    MatPaginatorModule,
    HttpClientModule,
    NgxSliderModule,
    AuthModule.forRoot({
      domain:"dev-y9hgi5ks.us.auth0.com",
      clientId:"R7OD1fFGcK8XKOTdl6MfMuElZreDZlIG"
    }),
    BrowserAnimationsModule,
    
  ],
  providers: [UserService, ProductService, AnswersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
