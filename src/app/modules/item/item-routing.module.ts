import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemGroupsComponent } from './itemgroups/itemgroups.component';

const routes: Routes = [
    {
        path: '', 
        component: ItemGroupsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ItemRoutingModule {
}

export const routedComponents = [
    ItemGroupsComponent
]
