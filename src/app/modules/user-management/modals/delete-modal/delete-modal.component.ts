import { Component, EventEmitter, OnInit, Output,   } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
  providers:[UserService]

})
export class DeleteModalComponent implements OnInit {
 

   constructor(public  activeModal: NgbActiveModal,
   private userService: UserService,
   private toastr: ToastrService
     ) {}
    @Output() deldata: EventEmitter<boolean>= new EventEmitter();
     ngOnInit(): void{
    }
    deletdata(){
     this.deldata.emit(true);
     this.activeModal.close('Close modal');
     this.toastr.success('DELETE USERS!','SUCCESS',);
     }
  
  // constructor (public activeModal: NgbActiveModal){ }
  // public confirm(): void{
  //   this.activeModal.close('cross click');
  // }
  // ngOnInit(): void {
    
  // }
}
 
  
  
