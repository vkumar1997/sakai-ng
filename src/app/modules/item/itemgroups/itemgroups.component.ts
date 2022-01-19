import { Component, OnInit } from '@angular/core';
import { ItemService } from '@data/service/itemservice/item.service';
import {DynamicDialogRef, DialogService} from 'primeng/dynamicdialog';
import { ItemSubGroupDetailComponent } from '../itemsubgroupdetail/itemsubgroupdetail.component';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-itemgroups-root',
  templateUrl: './itemgroups.component.html',
})

export class ItemGroupsComponent implements OnInit {
  itemgroups: TreeNode[];
  ref: DynamicDialogRef;
  cols: any[];
  selectedColumns: any[];
  constructor(
    private itemService: ItemService,
    public dialogService: DialogService
    ) { }
  
  ngOnInit() {
    this.itemService.getItemGroupHierarchy().then(itemgroups => this.itemgroups = itemgroups);
    this.cols = [
      {field: "ItemGroupCode", header: "Item Group Code", multi_select_inactive: true, editing_disabled: true},
      {field: "ItemGroupName", header: "Item Group Name", multi_select_inactive: true, editing_disabled: false},
      {field: "ItemGroupDesc", header: "Item Group Desc", multi_select_inactive: false, editing_disabled: false},
      {field: "CreatedBy", header: "Created By", multi_select_inactive: false, editing_disabled: true},
      {field: "CreatedDt", header: "Created Dt", multi_select_inactive: false, editing_disabled: true},
      {field: "ModifiedBy", header: "Modified By", multi_select_inactive: false, editing_disabled: true},
      {field: "ModifiedDt", header: "Modified Dt", multi_select_inactive: false, editing_disabled: true},
    ]
    this.selectedColumns = this.cols.slice(0,3);
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
