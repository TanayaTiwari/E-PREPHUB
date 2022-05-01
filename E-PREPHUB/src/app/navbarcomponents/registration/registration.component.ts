import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(fb: FormBuilder) { 
    this.registrationForm=fb.group({
      name:["",Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

 
}
