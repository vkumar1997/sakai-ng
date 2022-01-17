import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {
                        path: '', 
                        loadChildren: () => import('@modules/dashboard/dashboard.module')
                        .then(m => m.DashboardModule)
                    },
                    {
                        path: 'item-management/itemgroup',
                        loadChildren: () => import('@modules/item/item.module')
                        .then(m => m.ItemModule)
                    }
                ]
            },
            {path: '**', redirectTo: 'pages/empty'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
