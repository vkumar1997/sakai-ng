import { Component, OnInit } from '@angular/core';
import { ItemGroup } from '@data/schema/item/itemgroup/itemgroup.model';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { ItemPropertyType } from 'src/app/data/schema/item/itempropertytype/itempropertytype.model';

@Component({
  selector: 'app-itemsubgroupdetail',
  templateUrl: './itemsubgroupdetail.component.html',
  styleUrls: ['./itemsubgroupdetail.component.scss']
})
export class ItemSubGroupDetailComponent implements OnInit {
  itemgroup: ItemGroup;
  constructor(
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.itemgroup = this.config.data.itemgroup;
  }

  // onPropertyTypeAddEvent(event: any){
  //   let itempropertytype: ItemPropertyType ={ItemPropertyTypeCdSr: null, ItemSubGroupCdSr: this.itemsubgroup.ItemSubGroupCdSr, PropertyName: event.target.value, CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
  //   this.itemgroup.ItemPropertyTypeList.push(itempropertytype);
  //   event.target.value = "";
  // }

}
