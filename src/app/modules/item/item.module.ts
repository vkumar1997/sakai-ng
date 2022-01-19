import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemGroupsComponent } from './itemgroups/itemgroups.component';
import { ItemSubGroupDetailComponent } from './itemsubgroupdetail/itemsubgroupdetail.component';
import { ItemRoutingModule, routedComponents } from './item-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';
import {TreeTableModule} from 'primeng/treetable';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemGroupsComponent,
    ItemSubGroupDetailComponent,
    ...routedComponents
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    ButtonModule,
    CardModule,
    ChipModule,
    DividerModule,
    TableModule,
    TreeTableModule,
    MultiSelectModule,
    FormsModule
  ],
  providers: [
    DialogService
  ]
})
export class ItemModule { }
