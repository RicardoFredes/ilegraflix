import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/player/player.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrar', component: LoginComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'filme/:movie', component: DetailsComponent },
  { path: 'filme/:movie/assistir', component: PlayerComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
