import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent {

  constructor(public activeModal: NgbActiveModal) {}
  @Output() modaldata: EventEmitter<object>= new EventEmitter();
  ngOnInit(): void{

  }
  savedata(){
    this.modaldata.emit(this.modalform);
    this.activeModal.close('Close modal');
  }

  modalform = new FormGroup({
     name: new FormControl('', [Validators.required]),
     lastname: new FormControl('', [Validators.required]),
     username:new FormControl('',[Validators.required]),
     password:new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required, Validators.email]),
   })
   
}
