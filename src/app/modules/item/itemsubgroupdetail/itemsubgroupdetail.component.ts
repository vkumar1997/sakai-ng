import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { ItemSubGroups } from '../../../data/schema/item/itemsubgroups/itemsubgroups.model';
import { ItemPropertyType } from 'src/app/data/schema/item/itempropertytype/itempropertytype.model';

@Component({
  selector: 'app-itemsubgroupdetail',
  templateUrl: './itemsubgroupdetail.component.html',
  styleUrls: ['./itemsubgroupdetail.component.scss']
})
export class ItemSubGroupDetailComponent implements OnInit {
  itemsubgroup: ItemSubGroups;
  constructor(
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.itemsubgroup = this.config.data.itemsubgroup;
  }

  onPropertyTypeAddEvent(event: any){
    let itempropertytype: ItemPropertyType ={ItemPropertyTypeCdSr: null, ItemSubGroupCdSr: this.itemsubgroup.ItemSubGroupCdSr, PropertyName: event.target.value, CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
    this.itemsubgroup.ItemPropertyTypeList.push(itempropertytype);
    event.target.value = "";
  }

}
