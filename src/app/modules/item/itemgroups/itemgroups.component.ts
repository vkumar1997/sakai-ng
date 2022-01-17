import { Component, OnInit } from '@angular/core';
import { ItemGroups } from '@data/schema/item/itemgroups/itemgroups.model';
import { ItemService } from '@data/service/itemservice/item.service';
import {DynamicDialogRef, DialogService} from 'primeng/dynamicdialog';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { ItemSubGroupDetailComponent } from '../itemsubgroupdetail/itemsubgroupdetail.component';

@Component({
  selector: 'app-itemgroups-root',
  templateUrl: './itemgroups.component.html',
  animations: [
      trigger('rowExpansionTrigger', [
          state('void', style({
              transform: 'translateX(-10%)',
              opacity: 0
          })),
          state('active', style({
              transform: 'translateX(0)',
              opacity: 1
          })),
          transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
      ])
  ]
})

export class ItemGroupsComponent implements OnInit {
  ItemGroupsList: ItemGroups[];
  selectedItemGroup: ItemGroups;
  ref: DynamicDialogRef;
  constructor(
    private itemService: ItemService,
    public dialogService: DialogService
    ) { }
  
  ngOnInit() {
    this.ItemGroupsList = this.itemService.getItemGroupList()
  }

  public onItemSubGroupRowSelect(itemsubgroup)
  {
    this.ref = this.dialogService.open(ItemSubGroupDetailComponent, {
      header: 'Item Sub-Group Detail',
      width: '50%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000,
      data: {itemsubgroup: itemsubgroup}
    })
  }

}
