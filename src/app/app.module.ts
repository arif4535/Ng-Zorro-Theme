import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ContentComponent } from './modules/content/content.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AuthComponent } from './modules/auth_page/auth/auth.component';
import { RegisterPageComponent } from './modules/register-page/register-page.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { SidebarComponent } from './modules/layout/sidebar/sidebar.component';
import { AgGridModule } from 'ag-grid-angular';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { DeleteModalComponent } from './modules/user-management/modals/delete-modal/delete-modal.component';
import { UpdateModalComponent } from './modules/user-management/modals/update-modal/update-modal.component';
import { UpdateBtnCellRendererComponent } from './modules/user-management/btn-cell-renderer/update-btn-cell-renderer.component';
import { DeleteBtnCellRendererComponent } from './modules/user-management/btn-cell-renderer/delete-btn-cell-renderer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { FoodmenuComponent } from './food/foodmenu/foodmenu.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AuthComponent,
    RegisterPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserManagementComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    DeleteBtnCellRendererComponent,
    UpdateBtnCellRendererComponent,
    FoodmenuComponent,


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzCardModule,
    NzGridModule,
    AgGridModule,
    NzModalModule,
    NzListModule,
    NzMessageModule,
    NzIconModule,
    NgbModule,
    NzAvatarModule,
    NzImageModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:"toast-center-center",
      preventDuplicates:true
    }),
    RouterModule.forRoot([
      {
        path: 'team/:id',
        component: UserManagementComponent,
        canActivate: [AuthGuard]
      }
    ]),
  ],
  providers: [AuthGuard,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
