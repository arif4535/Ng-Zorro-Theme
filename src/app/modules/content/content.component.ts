import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../user-management/modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  constructor( private ngbModalService: NgbModal) { }
  ngbModal(){
    const modalRef=this.ngbModalService.open(DeleteModalComponent);
  }

  ngOnInit(): void {
  }

}
