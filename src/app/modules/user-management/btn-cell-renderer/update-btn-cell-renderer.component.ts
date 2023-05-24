import { Component } from '@angular/core';
import { UpdateModalComponent } from '../modals/update-modal/update-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-btn-cell-renderer',
  template: ` <button class="btn btn-primary" (click)="openModal()">
     <span nz-icon nzType="edit" nzTheme="outline"></span>
</button>
      
  `,
})
export class UpdateBtnCellRendererComponent {

    constructor(
      private modalService: NgbModal
      ){}
      param: any;
      agInit(param: any): void {
        this.param = param['value'];
      }
      openModal() {
        const modalRef = this.modalService.open(UpdateModalComponent, {size:'lg'});

      }
    }