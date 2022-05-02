import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './coaching-home.component.html',
  styleUrls: ['./coaching-home.component.scss']
})
export class CoachingHomeComponent {
  title = 'demo';
 @ViewChild(MatSidenav) sidenav! : MatSidenav;

 constructor(private observer: BreakpointObserver, private router:Router){

 }
 ngAfterViewInit(){
   this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
     if(res.matches){
       this.sidenav.mode ='over';
       this.sidenav.close();
     } else {
       this.sidenav.mode='side';
       this.sidenav.open();
     }
   });
 }
public onCreated(args: any) {
     
}
goToStdReg(pageName: string):void{
  this.router.navigate([`${pageName}`]);
 }

 goToBatchInfo(pageName: string):void{
  this.router.navigate([`${pageName}`]);
 }
 goToHome(pageName: string):void{
  this.router.navigate([`${pageName}`]);
 }
 goToAbout(pageName: string):void{
  this.router.navigate([`${pageName}`]);
 }
}


