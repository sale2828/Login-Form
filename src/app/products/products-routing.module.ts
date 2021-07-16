import { SaleComponent } from './sale/sale.component';
import { PATHS } from 'src/helpers/paths';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisecellaneousComponent } from './misecellaneous/misecellaneous.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: PATHS.SALE, component: SaleComponent, canActivate: [AuthGuard]
  },
  {
    path: PATHS.MISCELLANEOUS, component: MisecellaneousComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
