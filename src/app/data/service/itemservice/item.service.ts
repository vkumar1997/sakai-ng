import { Injectable } from '@angular/core';
import { ItemPropertyType } from 'src/app/data/schema/item/itempropertytype/itempropertytype.model';
import { ItemSubGroups } from 'src/app/data/schema/item/itemsubgroups/itemsubgroups.model';
import { ItemGroups } from 'src/app/data/schema/item/itemgroups/itemgroups.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  public getItemGroupList()
  {
    let itempropertytype1: ItemPropertyType ={ItemPropertyTypeCdSr: 0, ItemSubGroupCdSr: 0, PropertyName: "Color", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
    let itempropertytype2: ItemPropertyType ={ItemPropertyTypeCdSr: 1, ItemSubGroupCdSr: 0, PropertyName: "Build", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
    let itempropertytype3: ItemPropertyType ={ItemPropertyTypeCdSr: 3, ItemSubGroupCdSr: 0, PropertyName: "Version", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
    let itempropertytype4: ItemPropertyType ={ItemPropertyTypeCdSr: 4, ItemSubGroupCdSr: 0, PropertyName: "Weight", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}

    let itempropertytype5: ItemPropertyType ={ItemPropertyTypeCdSr: 5, ItemSubGroupCdSr: 1, PropertyName: "Color", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
    let itempropertytype6: ItemPropertyType ={ItemPropertyTypeCdSr: 6, ItemSubGroupCdSr: 1, PropertyName: "Build", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
    let itempropertytype7: ItemPropertyType ={ItemPropertyTypeCdSr: 7, ItemSubGroupCdSr: 1, PropertyName: "Version", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
    let itempropertytype8: ItemPropertyType ={ItemPropertyTypeCdSr: 8, ItemSubGroupCdSr: 1, PropertyName: "Weight", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}

    let subgroupslist1: ItemSubGroups ={ItemSubGroupCdSr: 0, ItemSubGroupCd: "check01", ItemGroupCdSr:0, ItemSubGroupName: "Hardware1", ItemSubGroupDesc: "Hardware1", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "ModifiedBy", ModifiedDt:"ModifiedDt", ItemPropertyTypeList: [itempropertytype1, itempropertytype2, itempropertytype3, itempropertytype4]}
    let subgroupslist2: ItemSubGroups ={ItemSubGroupCdSr: 1, ItemSubGroupCd: "check02", ItemGroupCdSr:0, ItemSubGroupName: "Hardware2", ItemSubGroupDesc: "Hardware2", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "ModifiedBy", ModifiedDt:"ModifiedDt", ItemPropertyTypeList: [itempropertytype5, itempropertytype6, itempropertytype7, itempropertytype8]}
    
    let itemgroup1: ItemGroups ={ItemGroupCdSr: 0, ItemGroupCd: "check", ItemGroupName: "Hardware", ItemGroupDesc: "All Hardware Products", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "ModifiedBy", ModifiedDt:"ModifiedDt", SubGroupsList: [subgroupslist1,subgroupslist2]};
    let itemgroup2: ItemGroups ={ItemGroupCdSr: 1, ItemGroupCd: "check1", ItemGroupName: "Software", ItemGroupDesc: "All Software Products", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "ModifiedBy", ModifiedDt:"ModifiedDt", SubGroupsList: []};
    
    return [itemgroup1,itemgroup2]
  }
}
