import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentReg !: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.studentReg = this.formBuilder.group({
      studentId: ['',Validators.required],
      password: ['', Validators.required],
    });
    
  }

  stdReg(){
    console.log(this.studentReg.value);
    if(this.studentReg.valid){
      this.api.stdLogin(this.studentReg.value).subscribe({
        next:(res) =>{
          alert('Student Login Successfully');
          this.studentReg.reset();
        },
        error: () =>{
          alert('Invalid Student ID or Passwords');
        },
        
      });
    }
   }
   goToStdHome(pageName: string):void{
    this.router.navigate([`${pageName}`]);
   }
}
