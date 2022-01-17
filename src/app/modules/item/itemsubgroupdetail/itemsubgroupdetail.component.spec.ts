import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemPropertyType } from '@data/schema/item/itempropertytype/itempropertytype.model';
import { ItemSubGroups } from '@data/schema/item/itemsubgroups/itemsubgroups.model';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { ItemSubGroupDetailComponent } from './itemsubgroupdetail.component';

describe('ItemsubgroupdetailComponent', () => {
  let component: ItemSubGroupDetailComponent;
  let itempropertytype1: ItemPropertyType ={ItemPropertyTypeCdSr: 0, ItemSubGroupCdSr: 0, PropertyName: "Color", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
  let itempropertytype2: ItemPropertyType ={ItemPropertyTypeCdSr: 1, ItemSubGroupCdSr: 0, PropertyName: "Build", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
  let itempropertytype3: ItemPropertyType ={ItemPropertyTypeCdSr: 3, ItemSubGroupCdSr: 0, PropertyName: "Version", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
  let itempropertytype4: ItemPropertyType ={ItemPropertyTypeCdSr: 4, ItemSubGroupCdSr: 0, PropertyName: "Weight", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "Vikas", ModifiedDt: "ModifiedDt"}
  let subgroup1: ItemSubGroups ={ItemSubGroupCdSr: 0, ItemSubGroupCd: "check01", ItemGroupCdSr:0, ItemSubGroupName: "Hardware1", ItemSubGroupDesc: "Hardware1", CreatedBy: "Vikas", CreatedDt: "CreatedDt", ModifiedBy: "ModifiedBy", ModifiedDt:"ModifiedDt", ItemPropertyTypeList: [itempropertytype1, itempropertytype2, itempropertytype3, itempropertytype4]}  
  component.config.data = subgroup1;
  let fixture: ComponentFixture<ItemSubGroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSubGroupDetailComponent ],
      providers: [ DynamicDialogConfig ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSubGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
