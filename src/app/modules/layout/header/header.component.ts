import {Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserService]

})
export class HeaderComponent  {
  constructor(
    private userservice:UserService,
  ){
    this.getAllUsers();
  }
  public getAllUsers(): void {
    this.userservice.getAllUsers().subscribe(
      (success: any) => {
       // this.userData = success.data;
       this.rowData = success.data;
      }
    )
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
      headerName: 'Edit',
      field: 'id',
      filter: false,
      width: 60,
      cellRenderer: 'updateBtnComponent',
      cellRendererParams: (params: any) => {
        return {
          params: params
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
