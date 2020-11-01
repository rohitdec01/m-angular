import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {ListEmployeeComponent} from './list-employee/list-employee.component'
import {AppRoutingModule} from './app-routing.module'
import {RouterModule} from '@angular/router'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HomeComponent} from './home/home.component'
import {AddUpdateEmployeeComponent} from './add-update-employee/add-update-employee.component'
import {LoggingInterceptor} from './interceptors/logging.interceptor'
import {AuthInterceptor} from './interceptors/auth.interceptor'
import { AdminComponent } from './admin/admin.component'
import { HeaderComponent } from './header/header.component'
import {CookieModule} from 'ngx-cookie'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListEmployeeComponent,
    HomeComponent,
    AddUpdateEmployeeComponent,
    AdminComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CookieModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
