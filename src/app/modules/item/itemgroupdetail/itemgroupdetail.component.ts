import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-itemgroupdetail',
  templateUrl: './itemgroupdetail.component.html',
  styleUrls: ['./itemgroupdetail.component.scss']
})
export class ItemGroupDetailComponent implements OnInit {
  itemnode: TreeNode;
  itemnodecopy: TreeNode;
  method: string;
  parentnode: TreeNode;
  itemgroups: TreeNode[];
  disabled: boolean = true;
  displayDeleteDialog: boolean = false;
  txtPropertyRename: string = "";
  rnmPropertyIndex: number;

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) { }

  ngOnInit(): void {
    this.itemnode = this.config.data.itemnode;
    this.method = this.config.data.method;
    this.itemnodecopy = cloneDeep(this.itemnode);
    this.parentnode = this.config.data.parentnode;
    this.config.data.itemgroups = null;
    this.itemgroups = this.config.data.itemgroups;
    this.disabled = this.config.data.disabled;
  }

  saveitemgroup()
  {
    if(this.method=="edit")
    {
      this.itemnode.data["ItemGroupName"] = this.itemnodecopy.data["ItemGroupName"];
      this.itemnode.data["ItemGroupDesc"] = this.itemnodecopy.data["ItemGroupDesc"];
    }
    if(this.method=="add")
    {
      this.parentnode.children.push(this.itemnodecopy);
    }
    if(this.method=="addroot")
    {
      this.itemgroups.push(this.itemnodecopy);
      console.log(this.itemgroups);
    }
    this.ref.close();
  }

  onGroupPropertyAddEvent(event: any){
    let itemgroupproperty = event.target.value;
    this.itemnodecopy.data.ItemGroupProperty.push(itemgroupproperty);
    event.target.value = "";
  }

  public chipClick(i: number)
  {
    this.rnmPropertyIndex=i;
  }

  public renameProperty()
  {
    this.itemnodecopy.data.ItemGroupProperty[this.rnmPropertyIndex] = this.txtPropertyRename;
    this.displayDeleteDialog = false;
    this.txtPropertyRename = "";
  }

  public deleteProperty()
  {
    this.itemnodecopy.data.ItemGroupProperty.splice(this.rnmPropertyIndex, 1);
    this.displayDeleteDialog = false;
    this.txtPropertyRename = "";
  }

}
