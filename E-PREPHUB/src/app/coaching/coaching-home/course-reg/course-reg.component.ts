import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-course-reg',
  templateUrl: './course-reg.component.html',
  styleUrls: ['./course-reg.component.css'],
})
export class CourseRegComponent implements OnInit {
  courseReg: FormGroup;
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.courseRegistration(), this.submitCourse();
  }

  courseRegistration() {
    this.courseReg = this.formbuilder.group({
      couese_type: ['', Validators.required],
      course: ['', Validators.required],
      coaching_id: JSON.parse(localStorage.getItem('currentUser')).username,
    });
  }
  submitCourse() {
    console.log(this.courseReg.value);
    this.api.forCourse(this.courseReg.value).subscribe((res) => {
      console.log('Response : - ', res);
    });
  }
}
