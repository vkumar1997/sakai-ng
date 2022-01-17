import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
 
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppConfigComponent } from '@layout/config/app.config.component';
import { AppMenuComponent } from '@layout/menu/menu.component';
import { DashboardModule } from '@modules/dashboard/dashboard.module';
import { ItemModule } from '@modules/item/item.module';
import { TopBarComponent } from '@layout/topbar/topbar.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { AppMenuitemComponent } from '@layout/menu/menuitem.component';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { DataModule } from '@data/data.module';

import { MenuService } from '@data/service/app.menu.service';
import { ConfigService } from '@data/service/app.config.service';
import { ItemService } from '@data/service/itemservice/item.service';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        DashboardModule,
        CoreModule,
        DataModule,
        SharedModule,
        ItemModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        TopBarComponent,
        FooterComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
         MenuService, ConfigService, ItemService, DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
