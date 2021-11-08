import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionBankService {

  private questions:any = [
    {
      id:1,
      question:"Which state produces maximum soybean?",
      options:["Madhya Pradesh","Uttar Pradesh","Bihar","Rajasthan"],
      answer:["Madhya Pradesh"]
    },
    {
      id:2,
      question:"Which country operationalized world’s largest radio telescope?",
      options:["USA","China","India","Denmark"],
      answer:["China"]
    },
    {
      id:3,
      question:"Fire temple is the place of worship of which of the following religion?",
      options:["Taoism","Judaism","Zoroastrianism","Shintoism"],
      answer:["Zoroastrianism"]
    },
    {
      id:4,
      question:"Film and TV institute of India is located at",
      options:["Pune (Maharashtra)","Rajkot (Gujarat)","Pimpri (Maharashtra)","Perambur (Tamilnadu)"],
      answer:["Pune (Maharashtra)"]
    }
  ]

  constructor() { }
  public getQuestions():any{
    return this.questions;
  }

  public totalQuestions():number{
    return this.questions.length;
  }
}
