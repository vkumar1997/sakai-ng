import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemGroupsComponent } from './itemgroups/itemgroups.component';
import { ItemGroupDetailComponent } from './itemgroupdetail/itemgroupdetail.component';
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
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import {ListboxModule} from 'primeng/listbox';
import {DialogModule} from 'primeng/dialog';
import {ChipsModule} from 'primeng/chips';

@NgModule({
  declarations: [
    ItemGroupsComponent,
    ItemGroupDetailComponent,
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
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    TagModule,
    ListboxModule,
    DialogModule,
    ChipsModule
  ],
  providers: [
    DialogService
  ]
})
export class ItemModule { }
