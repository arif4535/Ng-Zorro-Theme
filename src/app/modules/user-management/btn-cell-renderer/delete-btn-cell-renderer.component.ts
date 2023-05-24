import { Component } from '@angular/core';

import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: `app-delete-btn-cell-renderer`,
    template: `

    <button class="btn btn-danger" (click)="removeuser()">
    <span nz-icon nzType="delete" nzTheme="outline"></span>
    </button>
    `,
})
export class DeleteBtnCellRendererComponent {
    constructor(
        private modalService: NgbModal
      ){}
      param: any;
      agInit(param: any): void {
        this.param = param['value'];
      }
    removeuser(){
        const modalRef=this.modalService.open(DeleteModalComponent, {size:'lg'});
    }
}