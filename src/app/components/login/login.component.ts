import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public flag:boolean = false;
  userService:UserService;
  loginUrl ="http://localhost:4200/login";
  contactUrl ="http://localhost:4200/login";
  constructor(private formBuilder:FormBuilder,protected router: Router,userService:UserService) { 
    this.loginForm = this.formBuilder.group({
      name:      ['',Validators.required],
      email:     ['',[Validators.required,Validators.email]],
      password:  ['',Validators.required],
    })
    this.userService = userService;
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm:any):any{
    if(loginForm.valid){
      console.log("Valid Form");
      let email:string="";
      let password:string="";
      let username:string="";
      Object.keys(loginForm.controls).forEach(
        (formField)=>{
          const control = loginForm.controls[formField];
          if(formField == "email"){
            email = control.value;
          }
          else if(formField == "password"){
            password = control.value;
          }
          else{
            username = control.value;
          }
        }
      );
      
      if(password == "quiz"){
        this.userService.setUser(username,email);
        this.router.navigate(['home']);
      }
      else{
        this.flag=true;
      }
    }
    else{
      this.validateForm(loginForm);
    }
  }
  
  public validateForm(loginForm:any){
    Object.keys(loginForm.controls).forEach(
      (formField)=>{
        const control = loginForm.controls[formField];
        if(control instanceof FormControl){
          control.markAsTouched({onlySelf:true});
        }
        else{
          this.validateForm(control);
        }
      }
    );
  }

  public hasError(field:any){
    return (this.loginForm.get(field)?.invalid && this.loginForm.get(field)?.touched && this.loginForm.get(field)?.errors);
  }
  get f(){
    return this.loginForm.controls;
  }

}
