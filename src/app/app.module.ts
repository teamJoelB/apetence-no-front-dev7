import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoComponent } from './memo/memo.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMemoComponent } from './memo/create-memo/create-memo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemoPriveComponent } from './memo/memo-prive/memo-prive.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MemoComponent,
    CreateMemoComponent,
    MemoPriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
