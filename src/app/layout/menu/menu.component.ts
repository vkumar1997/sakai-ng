import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from '@app/app.main.component';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    template: `
        <p-panelMenu [model]="model"></p-panelMenu>
    `
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {
                label: 'Item Manangement',
                items:[
                    {label: 'Item Groups', icon: 'pi pi-fw pi-clone', routerLink: ['/item-management/itemgroup']}
                ]
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
