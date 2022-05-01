import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-PREPHUB';
  // @ViewChild(MatSidenav) sidenav! : MatSidenav;

 constructor(){

 }
//  ngAfterViewInit(){
//    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
//      if(res.matches){
//        this.sidenav.mode ='over';
//        this.sidenav.close();
//      } else {
//        this.sidenav.mode='side';
//        this.sidenav.open();
//      }
//    });
//   }
}
