import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

>>>>>>> 9734818ef0f30b419e567c7fc5ceddf0f3435d25
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
<<<<<<< HEAD
  registrationForm!: FormGroup;
  constructor(fb: FormBuilder) { 
    this.registrationForm=fb.group({
      name:["",Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

 
=======
  coachingReg!: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.coachingReg = this.formBuilder.group({
      coachingName: ['', Validators.required],
      adminName: ['', Validators.required],
      managerName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phoneNumber: ['', Validators.required, Validators.maxLength(10)],
      address: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  addCoaching() {
    if (this.coachingReg.valid) {
      this.api.addCoaching(this.coachingReg.value).subscribe({
        next: (res) => {
          alert('User added!');
          this.coachingReg.reset();
        },
        error: () => {
          alert('Error while adding user');
        },
      });
    }
  }
>>>>>>> 9734818ef0f30b419e567c7fc5ceddf0f3435d25
}
