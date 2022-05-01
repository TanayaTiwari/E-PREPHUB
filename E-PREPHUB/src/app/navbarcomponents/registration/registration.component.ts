import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

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

}
