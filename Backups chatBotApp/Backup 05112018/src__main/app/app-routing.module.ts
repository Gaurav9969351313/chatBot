import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ConversationComponent } from "./conversation/conversation.component";
import { AuthGuard } from "./shared/auth.guard";

const appRoutes: Routes = [
  // , canActivate: [AuthGuard]
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'conversation', component: ConversationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
