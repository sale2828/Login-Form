import { DirtycheckGuard } from './guards/dirtycheck.guard';
import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { PATHS } from './paths';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { HomepageGuardService } from './guards/homepage-guard.service';
import { LogInGuardService } from './guards/log-in-guard.service';

const routes: Routes = [
  {
    path: 'object/:name/:id',
    component: ObjectDetailComponent,
    canDeactivate: [DirtycheckGuard],
  },
  {
    path: PATHS.HOMEPAGE,
    component: HomepageComponent,
    canActivate: [HomepageGuardService],
  },
  {
    path: PATHS.LOGIN_FORM,
    component: LoginFormComponent,
    canActivate: [LogInGuardService],
  },
  {
    path: PATHS.LOGGED_IN,
    component: LoggedInPageComponent,
    canActivate: [HomepageGuardService],
  },
  {
    path: PATHS.DEFAULT,
    component: HomepageComponent,
    canActivate: [HomepageGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
