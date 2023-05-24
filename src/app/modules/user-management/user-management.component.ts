import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserService } from 'src/app/services/user.service';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { DeleteBtnCellRendererComponent } from './btn-cell-renderer/delete-btn-cell-renderer.component';
import { UpdateBtnCellRendererComponent } from './btn-cell-renderer/update-btn-cell-renderer.component';
import { UpdateModalComponent } from './modals/update-modal/update-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  providers:[UserService]
})
export class UserManagementComponent {
  constructor(
    private userservice:UserService,
    private modalService: NgbModal,
  ){
    this.getAllUsers();
  }
  public deluser(id: any) {
    let data = {
      id: id
    }
    console.log('data: ', data);
    console.log('id: ', id)
    this.userservice.deluser(data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.getAllUsers();
      }
    })
  }
  removeuser(data:any){
    console.log(data);
    const modalRef=this.modalService.open(DeleteModalComponent, {size:'lg'});
      modalRef.componentInstance.deldata.subscribe((param: any)=>{
        if (param == true) {
          const T = {
            id: data
          }
           this.userservice.deluser(T).subscribe((success:any)=>{
            if(success.statusCode == 200) {
              this.getAllUsers();
            }
          })
        }
        
      })
    
  }
  openuser(data: any) { 
    console.log(data);
		const modalRef = this.modalService.open(UpdateModalComponent, {size:'lg'});
		modalRef.componentInstance.modalform.reset(data) ;
    if(this.modalService.hasOpenModals()) {
      modalRef.componentInstance.modaldata.subscribe((param: any) => {
        param.value['id'] = data.id;
        this.userservice.upuser(param.value).subscribe((success: any) => {
          console.log('updated');
          this.getAllUsers();
        })
      })
    }
	} 
  public getAllUsers(): void {
    this.userservice.getAllUsers().subscribe(
      (success: any) => {
       // this.userData = success.data;
       this.rowData = success.data;
      }
    )
  }
  frameworkComponents = {
    deleteBtnComponent:DeleteBtnCellRendererComponent,
    updateBtnComponenet:UpdateBtnCellRendererComponent,
  }
  rowData=[];
  columnDefs: ColDef[] = [
    { 
      headerName:'İd',
      field: 'id' ,
      filter: 'agNumberColumnFilter'
    },
    { 
      headerName:'Name',
      field: 'name',
      filter: 'agTextColumnFilter'
    },
    {
      headerName:'LastName',
      field: 'lastname',
      filter: 'agTextColumnFilter'
     },
    { 
      headerName:'UserName',
      field: 'username',
      filter:' agTextColumnFilter' 
    },
    { 
      headerName:'Password',
      field: 'password',
      filter: 'agTextColumnFilter'
    },
    { 
      headerName: 'Email',
      field: 'email',
      filter:' agTextColumnFilter'  
    },
    {
      headerName:'Edit',
      field:'id',
      filter:false,
      width:120,
      cellRenderer:'updateBtnComponenet',
      cellRendererParams:(params:any)=>{
        return{
          params:params
        }
      }
    },
    {
      headerName:'Remove',
      field:'id',
      filter:false,
      width:120,
      cellRenderer:'deleteBtnComponent',
      cellRendererParams:(params:any)=>{
        return{
          params:params
        }
      }
    }
];
}
