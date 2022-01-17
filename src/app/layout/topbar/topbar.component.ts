import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppMainComponent } from '../../app.main.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html'
})
export class TopBarComponent {

    items: MenuItem[];

    constructor(public appMain: AppMainComponent) { }
}
