import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './coaching-home.component.html',
  styleUrls: ['./coaching-home.component.scss'],
})
export class CoachingHomeComponent {
  title = 'demo';
  isTest = false;
  isStdReg = false;
  isAddCourse = false;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router) {}
  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  public onCreated(args: any) {}

  goToHome(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
  goToAbout(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
  goToHelp(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
  goToStudy(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
  goToTest(): void {
    this.isTest = true;
    this.isStdReg = false;
    this.isAddCourse = false;
  }
  goToStdReg(): void {
    this.isStdReg = true;
    this.isTest = false;
    this.isAddCourse = false;
  }
  goToAddCourse(): void {
    this.isAddCourse = true;
    this.isTest = false;
    this.isStdReg = false;
  }
}
