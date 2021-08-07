import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableWithFilterComponent } from './table-with-filter/table-with-filter.component';
import { DataListComponent } from './data-list/data-list.component';
import { LogoComponent } from './logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchLineComponent } from './table-with-filter/search-line/search-line.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table-with-filter/table/table.component';
import { PaginatorComponent } from './table-with-filter/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    TableWithFilterComponent,
    DataListComponent,
    LogoComponent,
    SearchLineComponent,
    TableComponent,
    PaginatorComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
