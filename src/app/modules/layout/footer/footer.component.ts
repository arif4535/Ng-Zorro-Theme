import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Chart, registerables } from 'chart.js';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ UserService],

})
export class FooterComponent {
  constructor (
    private userService: UserService,
    ) {
      this.getAllUsers();
    }
     labeldata:any[]=[];
     numberdata:any[]=[];
  public getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (success: any) => {
        // this.userData = success.data;
        this.rowData = success.data
      }
    )
  }
  click(): void {
   this.userService.getAllUsers().subscribe(
     (success: any) => {
       console.log(success);
     },
     (error: any) => {
       console.error();
     }
   )
   }
 
  public get(): void {
   this.userService.getAllUsers().subscribe((success: any)=>{
     console.log(success);
   },
   (error:any)=>{
     console.log(error);
   }
   )
 }
  columnDefs: ColDef[] = [
    { field: 'id'  },
    { field: 'name' },
    { field: 'lastname' },
    { field: 'username'},
    { field: 'password'},
    { field: 'email'}
];

rowData = [];
title = 'angular-chart';
ngOnInit() {
 this.getchart();    
 }
 getchart(){
   this.userService.getAllUsers().subscribe((res:any)=>{
     res.forEach((element: any) => {
       console.log(element)
       this.labeldata.push(element.id);
       this.numberdata.push(element.email);
     });
     this.createLineChart(this.labeldata, this.numberdata);
     this.creatbarChart(this.labeldata, this.numberdata);
     this.createPieChart(this.labeldata,this.numberdata);
     
   })
 }
 createLineChart(labels: any[], data: any[]) {
   const lineCanvasEle: any = document.getElementById('line_chart')
   const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
     type: 'line',
       data: {
         labels: labels,
         datasets: [
           { data: data,
             label: 'Orders',
           borderColor: 'rgba(54, 162, 235)' },
         ],
       },
       options: {
         responsive: true,
         scales: {
             y: {
                 beginAtZero: true
             }
         }
       }
     });
 }
 creatbarChart(labels: any[], data: any[]) {
   const barCanvasEle: any = document.getElementById('bar_chart')
   const barChart = new Chart(barCanvasEle.getContext('2d'), {
     type: 'bar',
       data: {
         labels: labels,
         datasets: [{
           label: 'Sales',
           data: data,
           backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(255, 159, 64, 0.2)',
             'rgba(255, 205, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(201, 203, 207, 0.2)'
           ],
           borderColor: [
             'rgb(255, 99, 132)',
             'rgb(255, 159, 64)',
             'rgb(255, 205, 86)',
             'rgb(75, 192, 192)',
             'rgb(54, 162, 235)',
             'rgb(153, 102, 255)',
             'rgb(201, 203, 207)'
           ],
           borderWidth: 1
         }]
       },
       options: {
         responsive: true,
         scales: {
             y: {
                 beginAtZero: true
             }
         }
       }
     });
  }
  createPieChart(labels: any[], data: any[]) {
   const pieCanvasEle: any = document.getElementById('pie_chart')
   const pieChar = new Chart(pieCanvasEle.getContext('2d'), {
       type: 'pie',
       data: {
         labels: labels,
         datasets: [
           {
             backgroundColor: [
               '#2ecc71',
               '#3498db',
               '#95a5a6',
               '#9b59b6',
               '#f1c40f',
               '#e74c3c',
               '#2525'
             ],
             data: data,
           },
         ],
       },
     });
   }
   
}



