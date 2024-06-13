import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BodyComponent } from './pages/home/components/body/body.component';
import { JogoComponent } from './pages/home/pages/jogo/jogo.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {
    path: "app", component: HomeComponent,
    children: [
      {path: "", component: BodyComponent},
      { path: 'viewGame/:id', component: JogoComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
