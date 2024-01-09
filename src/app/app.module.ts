import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRowComponent } from './user-row/user-row.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [AppComponent, UserRowComponent, UserTableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
