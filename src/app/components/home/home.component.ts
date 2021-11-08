import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionBankService } from 'src/app/services/question-bank.service';
import { SubmittedAnswerService } from 'src/app/services/submitted-answer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public questions:any;
  private answeredMap = new Map();
  private answerService:any;
  constructor(questions:QuestionBankService,answersSubmitted:SubmittedAnswerService,protected router: Router) { 
    this.questions = questions.getQuestions();
    this.answerService = answersSubmitted;
  }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.answerService.setAnswers(this.answeredMap);
    this.router.navigate(['result']);
  }

  public submit(form:any){
    console.log(form);
    
  }
  public answerChanged(qid:any,answerEvent:any){
    this.answeredMap.set(qid,answerEvent.target.value);
    console.log(this.answeredMap); 
  }
}
