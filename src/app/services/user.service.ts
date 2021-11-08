import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:any;
  private username:string="";
  private email:string="";
  private url:string = "http://localhost:3000/api/users"; 
  constructor(private htppClient:HttpClient) { }

  public getUsers(){
    return this.htppClient.get(this.url);
  }

  public addUser(user:any){
    return this.htppClient.post(this.url,user);
  }

  public getUsername(){
    return this.username;
  }
  public getEmail(){
    return this.email;
  }
  public setUser(username:string,email:string){
    this.username = username;
    this.email = email;
  }

}
