import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-batch-info',
  templateUrl: './batch-info.component.html',
  styleUrls: ['./batch-info.component.scss']
})
export class BatchInfoComponent implements OnInit {
  batchForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }


  ngOnInit(): void {
    this.batchInfo();
  }



  batchInfo(){
    this.batchForm = this.formBuilder.group({
      batchName:['', Validators.required],
      courseName:['', Validators.required],
      coachingId: JSON.parse(localStorage.getItem("currentUser")).username
    });
  }

  batchReg(){
    console.log(this.batchForm.value);
    this.api.batchRegistration(this.batchForm.value).subscribe(
      (res)=>{
        alert(res);
      }

    );
  }
}
