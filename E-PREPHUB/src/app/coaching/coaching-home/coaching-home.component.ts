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
  isAddTestScore = false;
  isAddStudyMatrial = false;
  isAddHelp = false;
  isAddAbout = false;
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
  goToAbout(): void {
    this.isTest = false;
    this.isStdReg = false;
    this.isAddCourse = false;
    this.isAddTestScore = false;
    this.isAddStudyMatrial = false;
    this.isAddHelp = false;
    this.isAddAbout = true;
  }
  goToHelp(): void {
    this.isTest = false;
    this.isStdReg = false;
    this.isAddCourse = false;
    this.isAddTestScore = false;
    this.isAddStudyMatrial = false;
    this.isAddHelp = true;
    this.isAddAbout = false;
  }
  goToStudy(): void {
    this.isTest = false;
    this.isStdReg = false;
    this.isAddCourse = false;
    this.isAddTestScore = false;
    this.isAddStudyMatrial = true;
    this.isAddHelp = false;
    this.isAddAbout = false;
  }
  goToTest(): void {
    this.isTest = true;
    this.isStdReg = false;
    this.isAddCourse = false;
    this.isAddTestScore = false;
    this.isAddStudyMatrial = false;
    this.isAddHelp = false;
    this.isAddAbout = false;
  }
  goToTestScore(): void {
    this.isTest = false;
    this.isStdReg = false;
    this.isAddCourse = false;
    this.isAddTestScore = true;
    this.isAddStudyMatrial = false;
    this.isAddHelp = false;
    this.isAddAbout = false;
  }
  goToStdReg(): void {
    this.isTest = false;
    this.isStdReg = true;
    this.isAddCourse = false;
    this.isAddTestScore = false;
    this.isAddStudyMatrial = false;
    this.isAddHelp = false;
    this.isAddAbout = false;
  }
  goToAddCourse(): void {
    this.isTest = false;
    this.isStdReg = false;
    this.isAddCourse = true;
    this.isAddTestScore = false;
    this.isAddStudyMatrial = false;
    this.isAddHelp = false;
    this.isAddAbout = false;
  }
}
