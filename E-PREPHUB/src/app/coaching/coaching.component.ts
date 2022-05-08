import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.scss']
})

export class CoachingComponent implements OnInit {
  coachingLogin !: FormGroup; 
  constructor(private formBuilder: FormBuilder,private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.coachingLogin = this.formBuilder.group({
      loginID: ['',Validators.required],
      password: ['',Validators.required],
    });
  }
  
  coachingLog(){
    console.log(this.coachingLogin.value);
    if(this.coachingLogin.valid){
      if(localStorage.getItem('currentUser'))
      {
        this.router.navigate([`coaching-home`]);
        return;
      }
      this.api.coachingLog(this.coachingLogin.value).subscribe({
        next:(res) =>{
          if(res.success.value)
          {
            localStorage.setItem('currentUser', JSON.stringify({ token: res.token, name: name }));
            this.router.navigate([`coaching-home`]);
          }
          this.coachingLogin.reset();
        },
        error: () =>{
          alert('Invalid ID or Passwords');
        }, 
      });
    }
   }
   
   goToCoachingHome(pageName: string):void{
    this.router.navigate([`${pageName}`]);
    alert('Login successfully!!');
   }
  }
 
