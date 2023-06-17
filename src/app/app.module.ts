import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CutomerListComponent } from './home/cutomer-list/cutomer-list.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './appConfig/appconfig.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NotFoundComponent,
    NavigationComponent,
    HomeComponent,
    CutomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [{
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
