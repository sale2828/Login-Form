import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { HomepageGuardService } from './guards/homepage-guard.service';
import { LogInGuardService } from './guards/log-in-guard.service';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { HttpClientModule } from '@angular/common/http';
import { DateComponent } from './date/date.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomepageComponent,
    LoggedInPageComponent,
    WeatherApiComponent,
    ObjectDetailComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HomepageGuardService, LogInGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
