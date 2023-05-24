import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzPlacementType } from 'ng-zorro-antd/dropdown/dropdown-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    nz-content{
      min-height: 100%;
    }
    .header-menu {
        line-height: 64px;
    }
    .title {
      color: red;
      font-size: 25px; 
    }
  `]
})
export class AppComponent {
  title = 'AngularUI';
  constructor(private router: Router) {}
  go(param: string): void {
    this.router.navigate([param])
  }
}
