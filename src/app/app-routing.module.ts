import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';
import { GameComponent } from './game/game.component';
import { GameInputComponent } from './game-input/game-input.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'game', component: GameComponent },
  { path: 'game-input', component: GameInputComponent },
  { path: 'travel', component: TravelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
