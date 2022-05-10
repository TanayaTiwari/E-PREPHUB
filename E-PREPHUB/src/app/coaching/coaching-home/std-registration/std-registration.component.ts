import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-std-registration',
  templateUrl: './std-registration.component.html',
  styleUrls: ['./std-registration.component.scss'],
})
export class StdRegistrationComponent implements OnInit {
  stdReg: FormGroup;
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}
  batches: any = [];
  courses: any = [];
  selectedCourse = '';
  selectedBatch = '';

  ngOnInit(): void {
    this.studentRegistration();
    this.getCourses();
  }

  studentRegistration() {
    this.stdReg = this.formbuilder.group({
      student_name: ['', Validators.required],
      student_email: ['', Validators.required],
      student_phone_number: ['', Validators.required],
      student_address: ['', Validators.required],
      student_qualification: ['', Validators.required],
      student_course: ['', Validators.required],

      student_password: ['', Validators.required],
      student_confirm_password: ['', Validators.required],
      student_coaching_id: JSON.parse(localStorage.getItem('currentUser'))
        .username,
    });
  }
  stdRegistration() {
    console.log(this.stdReg.value);
    this.api.studentRegistrationCoaching(this.stdReg.value).subscribe((res) => {
      console.log('Response : - ', res);
    });
  }
  // getBatches() {
  //   this.api
  //     .getBatchesByCourse(this.stdReg.get('student_course').value)
  //     .subscribe((res) => {
  //       console.log(res);
  //       this.batches = res;
  //     });
  // }

  getCourses() {
    this.api.getCoursesByCoachingId().subscribe((res) => {
      this.courses = res.Coaching_courses;
    });
  }
}
