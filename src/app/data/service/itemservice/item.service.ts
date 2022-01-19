import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getItemGroupHierarchy()
  {
    return this.http.get<any>('assets/showcase/itemgrouphierarchy.json')
    .toPromise()
    .then(res => <TreeNode[]> res.data);
  }
}
