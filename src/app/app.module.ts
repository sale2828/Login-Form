import { CommonComponent } from './CommonComponent/common.component';
import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateComponent } from './date/date.component';
import { JwtInterceptor } from 'src/helpers/jwt.interceptor';
import { ErrorInterceptor } from 'src/helpers/error.interceptor';
import { fakeBackendProvider } from 'src/helpers/fake-backend.interceptor';
import { RandomObjectComponent } from './random-object/random-object.component';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginFormComponent,
    LoggedInPageComponent,
    WeatherApiComponent,
    ObjectDetailComponent,
    DateComponent,
    RandomObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductsModule
  ],
  exports: [
    RandomObjectComponent,
  ],
  providers: [
    CommonComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
