import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionBankService } from 'src/app/services/question-bank.service';
import { SubmittedAnswerService } from 'src/app/services/submitted-answer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private answerMap:any;
  public numberOfQuestions:number;
  public wrongQuestions:number=0;
  public unAnsweredQuestions:number;
  public totquesperc:number = 100;
  public correctPerc:number=0;
  public incorrectPerc:number=0;
  public unansweredPerc:number;
  private user:any;
  private question:any;
  public score:number=0;
  constructor(private answers:SubmittedAnswerService,private questions:QuestionBankService,
    public userService:UserService,private router:Router) { 
    this.answerMap = answers.getAnswers();
    this.numberOfQuestions = questions.totalQuestions();
    this.question = questions.getQuestions();
    this.unAnsweredQuestions = this.numberOfQuestions - this.answerMap.size;  
    this.unansweredPerc = ((this.unAnsweredQuestions)/(this.numberOfQuestions))*100;
    this.result();
    this.user={
      username:userService.getUsername(),
      email: userService.getEmail(),
      score : this.correctPerc.toString()
    };
    console.log(this.user);
    
    this.userService.addUser(this.user).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("error");
      }
      );
  }

  ngOnInit(): void {
  }

  public result():any{
    console.log(this.question);
    let ques:any;
    for (const [qid, answered] of this.answerMap.entries()) {
      this.question.forEach((q:any)=>{
        if(q.id == qid){
          if(q.answer==answered){
            this.score+=1;
          }
        }
      });
    }
    this.wrongQuestions = this.numberOfQuestions - this.score - this.unAnsweredQuestions;
    this.correctPerc = ((this.score)/(this.numberOfQuestions))*100;
    this.incorrectPerc = ((this.wrongQuestions)/(this.numberOfQuestions))*100;
  }

}
