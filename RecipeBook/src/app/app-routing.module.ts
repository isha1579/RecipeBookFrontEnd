import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { OptionsComponent } from './options/options.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserComponent } from './user/user.component';
import { CheckboxGuard } from './checkbox.guard';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [CheckboxGuard]
  },
  { path: 'user-login', component: UserLoginPageComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-panel', component: AdminPanelComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(router: Router) {
    console.log(router.config);
  }
}
