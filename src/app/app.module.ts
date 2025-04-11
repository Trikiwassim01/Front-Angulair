import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MenberFormComponent } from './menber-form/menber-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TemplateComponent } from './template/template.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { EventComponent } from './event/event.component';
import { ArticleComponent } from './article/article.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { ModalEvtComponent } from './modal-evt/modal-evt.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PubDetailsComponent } from './pub-details/pub-details.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './environment';
import { LoginComponent } from './login/login.component';
import { PubModalComponent } from './pub-modal/pub-modal.component';
import {MatSelectModule} from '@angular/material/select';
import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MenberFormComponent,
    ConfirmDialogComponent,
    TemplateComponent,
    DashboardComponent,
    ToolComponent,
    EventComponent,
    ArticleComponent,
    ModalEvtComponent,
    PubDetailsComponent,
    LoginComponent,
    PubModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    ,MatTableModule
    ,MatIconModule
    ,HttpClientModule
    ,MatFormFieldModule
    ,MatInputModule
    ,FormsModule
    ,ReactiveFormsModule
    ,MatDialogModule
    ,MatSidenavModule
    ,MatToolbarModule
    ,MatListModule
    ,MatMenuModule
    ,MatPaginatorModule
    ,MatSortModule
    ,MatDatepickerModule
    ,MatNativeDateModule
    ,AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MatSelectModule,
    MatCardModule
    ,NgChartsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
