import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmittedAnswerService {
  private submittedAnswers:any;
  constructor() { }
  public setAnswers(answerMap:any){
    this.submittedAnswers = answerMap;
  }
  public getAnswers(){
    return this.submittedAnswers;
  }
}
