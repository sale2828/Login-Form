import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MisecellaneousComponent } from './misecellaneous/misecellaneous.component';
import { SaleComponent } from './sale/sale.component';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    MisecellaneousComponent,
    SaleComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],

  exports: [
    SaleComponent
  ],
})
export class ProductsModule { }
