import { DirtycheckGuard } from './guards/dirtycheck.guard';
import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { PATHS } from './helpers/paths';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageGuardService } from './guards/homepage-guard.service';

const routes: Routes = [



  {
    path: '',
    redirectTo: PATHS.HOMEPAGE,
    pathMatch: 'full'
  },
  {
    path: 'object/:name/:id',
    component: ObjectDetailComponent,
    canActivate: [AuthGuard],
    canDeactivate: [DirtycheckGuard],
  },
  {
    path: PATHS.HOMEPAGE,
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: PATHS.LOGIN_FORM,
    component: LoginFormComponent,
    canActivate: [HomepageGuardService],
  },
  {
    path: "products",
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule)
  },
  {
    path: PATHS.DEFAULT,
    redirectTo: PATHS.HOMEPAGE,
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
