import { Component, OnInit,ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionsAddUpdateModel } from 'src/app/Models/QusetionsAddUpdateModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  batchReg: FormGroup;
  QuestionsForm: FormGroup;
  displayedColumns: string[] = ['Question', 'Option1', 'Option2', 'Option3','Option4','Answer'];
  dataSource: MatTableDataSource<QuestionsAddUpdateModel>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private formBuilder:FormBuilder) { }
  QuestionAddUpdate: QuestionsAddUpdateModel[]=[];
  ngOnInit(): void {
    this.crateBatchRegForm();
    this.createQuestionsForm();
    
  }
  msg(){
    alert('Detail Submitted. Click on add question to add questions!!');
  }


addQuestion(){
  let newQuestion :  QuestionsAddUpdateModel={
  // console.log( this.QuestionsForm.get("Question").value);
  Question:this.QuestionsForm.get("Question").value,
  Option1 : this.QuestionsForm.get("Option1").value,
  Option2 : this.QuestionsForm.get("Option2").value,
  Option3 : this.QuestionsForm.get("Option3").value,
  Option4 : this.QuestionsForm.get("Option4").value,
  Answer : this.QuestionsForm.get("Answer").value,
  }
  this.QuestionAddUpdate.push(newQuestion);
  this.dataSource=new MatTableDataSource(this.QuestionAddUpdate);
  this.QuestionsForm.reset();
}
  
crateBatchRegForm(){

  this.batchReg=this.formBuilder.group({
    Test_name:['',Validators.required],
    Batch_name:['',Validators.required],
    No_of_question:['',Validators.required]
   
  });
}

createQuestionsForm(){
this.QuestionsForm = new FormGroup({
  Question : new FormControl(""),
  Option1 : new FormControl(""),
  Option2 : new FormControl(""),
  Option3 : new FormControl(""),
  Option4 : new FormControl(""),
  Answer : new FormControl("")
});
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
