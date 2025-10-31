import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { HomeComponent } from './home/home';
import { QuizComponent } from './quiz/quiz';
import { AuthGuard } from './auth.guard';
import { TopicsComponent } from './topics/topics';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'topics', component: TopicsComponent, canActivate: [AuthGuard] }, // protected
  { path: 'quiz/:topic', component: QuizComponent, canActivate: [AuthGuard] }, // protected
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] }, // protected
  { path: '**', redirectTo: '' } // fallback
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
