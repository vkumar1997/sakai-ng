import { Component, OnInit } from '@angular/core';
import { ItemService } from '@data/service/itemservice/item.service';
import {DynamicDialogRef, DialogService} from 'primeng/dynamicdialog';
import { ItemGroupDetailComponent } from '../itemgroupdetail/itemgroupdetail.component';
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
  searchResults: any[];
  globalSearchPhrase: string = "";
  globalSearchSelectedItem: any;
  
  constructor(
    private itemService: ItemService,
    public dialogService: DialogService
    ) { }
  
  ngOnInit() {
    this.itemService.getItemGroupHierarchy().then(itemgroups => this.itemgroups = itemgroups);
    this.cols = [
      {field: "ItemGroupCode", header: "Item Group Code", multi_select_inactive: true, sortable: true, filter: true},
      {field: "ItemGroupName", header: "Item Group Name", multi_select_inactive: true, sortable: true, filter: true},
      {field: "ItemGroupDesc", header: "Item Group Desc", multi_select_inactive: false, sortable: true, filter: true},
      {field: "ItemGroupProperty", header: "Properties", multi_select_inactive: false, sortable: false, filter: false},
      {field: "CreatedBy", header: "Created By", multi_select_inactive: false, sortable: true, filter: true},
      {field: "CreatedDt", header: "Created Dt", multi_select_inactive: false, sortable: true, filter: true},
      {field: "ModifiedBy", header: "Modified By", multi_select_inactive: false, sortable: true, filter: true},
      {field: "ModifiedDt", header: "Modified Dt", multi_select_inactive: false, sortable: true, filter: true},
    ]
    this.selectedColumns = this.cols.slice(0,4);
  }

  private startDialogService(header: string, itemnode: TreeNode, parentnode: TreeNode, method: string, itemgroups: TreeNode[], disabled: boolean)
  {
    this.ref = this.dialogService.open(ItemGroupDetailComponent, {
      header: header,
      width: '30%',
      contentStyle: {"max-height": "800px", "overflow": "auto"},
      baseZIndex: 10000,
      data: {itemnode: itemnode, method: method, parentnode: parentnode, itemgroups: itemgroups, disabled: disabled}
    });
  }

  public edititemgroup(itemnode)
  {
    console.log(itemnode)
    this.startDialogService(itemnode.node.data.ItemGroupCode + ' - ' + itemnode.node.data.ItemGroupName, itemnode.node, null, 'edit', this.itemgroups, false);
  }

  public viewitemgroup(itemnode)
  {
    this.startDialogService(itemnode.node.data.ItemGroupCode + ' - ' + itemnode.node.data.ItemGroupName, itemnode.node, null, 'view', this.itemgroups, true);
  }

  public additemgroup(parentnode)
  {
    let itemnode = <TreeNode>{
      "data":
      {
          "data":{
              "ItemGroupCode":this.makeid(5),
              "ItemGroupName":"",
              "ItemGroupDesc":"",
              "CreatedBy":"Vikas",
              "ItemGroupProperty": [],
              "CreatedDt":Date.now().toString(),
              "ModifiedBy":"Vikas",
              "ModifiedDt":Date.now().toString()
          },
          "children":[
          ]
      }
  }.data;

  this.startDialogService('Add new itemgroup', itemnode, parentnode.node, 'add', this.itemgroups, false); 
  }

  public addrootgroup()
  {
    let itemnode = <TreeNode>{
      "data":
      {
          "data":{
              "ItemGroupCode":this.makeid(5),
              "ItemGroupName":"",
              "ItemGroupDesc":"",
              "CreatedBy":"Vikas",
              "ItemGroupProperty": [],
              "CreatedDt":Date.now().toString(),
              "ModifiedBy":"Vikas",
              "ModifiedDt":Date.now().toString()
          },
          "children":[
          ]
      }
    }.data;
    //this.itemgroups = null
    this.startDialogService('Add new itemgroup', itemnode, null, 'addroot', this.itemgroups, false); 
  }

  public deleteitemgroup(itemnode)
  {
    console.log(itemnode)
    if(itemnode.parent==null)
      this.itemgroups = this.itemgroups.filter(obj => obj!==itemnode.node);
    
    else
      itemnode.parent.children = itemnode.parent.children.filter(obj => obj!==itemnode.node); 
  }

  private makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  private getSearchableHierarchy(searchPhrase: string)
  {
    let searchable_hierarchy_list: any[] = []
    this.itemgroups.forEach(itemgroup => {
      this.getHierarchyRecursive(itemgroup, searchable_hierarchy_list, "", searchPhrase);
    });
    return searchable_hierarchy_list;
  }

  private getHierarchyRecursive(itemnode: TreeNode, searchable_hierarchy_list: any[], suggestion: string, searchPhrase: string)
  {
    suggestion = suggestion + itemnode.data.ItemGroupName; 
    if (itemnode.data.ItemGroupName.toString().toLowerCase().includes(searchPhrase.toLowerCase()))
    {
      searchable_hierarchy_list.push({itemnode: itemnode, suggestion: suggestion});
    }
    suggestion = suggestion + ' -> '
    if(itemnode.children)
    {
      itemnode.children.forEach(child => {
        this.getHierarchyRecursive(child, searchable_hierarchy_list, suggestion, searchPhrase);
      });
    }
  }

  public txtSearchItemGroupChange(searchPhrase: string)
  {
    this.searchResults = [];
    this.globalSearchSelectedItem = undefined;
    if(searchPhrase)
    {
      this.searchResults = this.getSearchableHierarchy(searchPhrase);
    }
    this.globalSearchPhrase = searchPhrase;
  }
}
