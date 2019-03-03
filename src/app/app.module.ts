import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



import {LayoutComponent} from "./layout/layout.component";
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import {MatCheckboxModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { MainComponent } from './main/main.component';
import { EnaamComponent } from './enaam/enaam.component';








registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    RecommendationComponent,
    MainComponent,
    EnaamComponent,
   
  
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   NgxPaginationModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule ,
    MatCardModule,
  FormsModule,
  MatTableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
MatIconModule,
MatCheckboxModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,

   

  ],
  providers: [TodoService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule]
})
export class AppModule { }
