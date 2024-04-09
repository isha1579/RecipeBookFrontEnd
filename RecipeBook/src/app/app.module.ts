import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionsComponent } from './options/options.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './authinterceptor.service';
import { ErrorInterceptor } from './error-interceptor.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DataService } from './dataservice.service';
import { OrderPipe } from './order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    UserLoginPageComponent,
    OptionsComponent,
    AdminPanelComponent,
    OrderPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    ReactiveFormsModule,
    HttpClientModule, FormsModule,
  ],
  providers: [
    DataService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
