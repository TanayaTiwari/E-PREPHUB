import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.scss']
})
export class StudentPortalComponent implements OnInit {
  studentRegistration !: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.studentRegistration = this.formBuilder.group({
      studentId: ['',Validators.required],
      password: ['', Validators.required],
    });
    
  }

  stdReg(){
    console.log(this.studentRegistration.value);
    if(this.studentRegistration.valid){
      this.api.stdLogin(this.studentRegistration.value).subscribe({
        next:(res) =>{
          alert('Student Login Successfully');
          this.studentRegistration.reset();
        },
        error: () =>{
          alert('Invalid Student ID or Passwords');
        },
        
      });
    }
   }
}
