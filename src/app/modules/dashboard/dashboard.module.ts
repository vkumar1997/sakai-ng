import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';

import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ProductService } from '@shared/service/productservice';


@NgModule({
  declarations: [
    DashboardComponent, 
    ...routedComponents
  ],
  imports:   [
    CommonModule, 
    ChartModule,
    MenuModule,
    TableModule,
    DashboardRoutingModule
  ],
  providers: [
    ProductService
  ]
})
export class DashboardModule { }
