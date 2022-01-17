import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemService } from '@data/service/itemservice/item.service';
import { DialogService } from 'primeng/dynamicdialog';

import { ItemGroupsComponent } from './itemgroups.component';

describe('ItemGroupsComponent', () => {
  let component: ItemGroupsComponent;
  let fixture: ComponentFixture<ItemGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemGroupsComponent ],
      providers: [ DialogService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
