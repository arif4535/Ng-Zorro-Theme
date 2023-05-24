import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './modules/content/content.component';
import { AuthComponent } from './modules/auth_page/auth/auth.component';
import { RegisterPageComponent } from './modules/register-page/register-page.component';
import { SidebarComponent } from './modules/layout/sidebar/sidebar.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { DeleteModalComponent } from './modules/user-management/modals/delete-modal/delete-modal.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { AuthGuard } from './core/auth.guard';
import { FoodmenuComponent } from './food/foodmenu/foodmenu.component';

const routes: Routes = [
  // { path: '' , pathMatch:'full', redirectTo:'/auth'},
  { path:'content', component:ContentComponent},
  { path: 'auth' , component:AuthComponent},
  { path: 'register', component:RegisterPageComponent},
  { path: 'sidebar', component:SidebarComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'deneme', component:DeleteModalComponent},
  { path: 'user', component:UserManagementComponent , canActivate:[AuthGuard]},
  { path: 'footer', component:FooterComponent},
  { path: 'menu', component:FoodmenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  providers: [ Permissions],
  exports: [RouterModule]
})
export class AppRoutingModule { }
