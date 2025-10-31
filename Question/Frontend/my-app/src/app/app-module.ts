import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth-interceptor';
import { HomeComponent } from './home/home';
import { QuizComponent } from './quiz/quiz';
import { AppRoutingModule } from './app-routing-module';
import { TopicsComponent } from './topics/topics';


@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, HomeComponent, QuizComponent, TopicsComponent],
imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AppModule { }
