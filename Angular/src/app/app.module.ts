import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgChartsModule } from 'ng2-charts';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';
import { GameComponent } from './game/game.component';
import { GameInputComponent } from './game-input/game-input.component';
import { TravelComponent } from './travel/travel.component';
import { WorkComponent } from './work/work.component';
import { CoderComponent } from './coder/coder.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { MoviesComponent } from './movies/movies.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PersonComponent } from './person/person.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginButtonComponent } from './login-button/login-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandComponent,
    GameComponent,
    GameInputComponent,
    TravelComponent,
    WorkComponent,
    CoderComponent,
    GraphicsComponent,
    MoviesComponent,
    DoughnutChartComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    SignupFormComponent,
    LoginFormComponent,
    PersonComponent,
    ProfileComponent,
    LoginButtonComponent,
    NavbarComponent,
    LogoutButtonComponent,
    SignupButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain:"dev-y9hgi5ks.us.auth0.com",
      clientId:"R7OD1fFGcK8XKOTdl6MfMuElZreDZlIG"
    }),
  ],
  providers: [ProfileService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
