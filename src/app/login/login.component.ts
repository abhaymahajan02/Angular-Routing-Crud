import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // customerid = "";
  // carmodel = "";
  // isLoginSuccess = false;

  loginForm : FormGroup;
  ssubmitted = false;


  constructor(private formBuilder:FormBuilder) {
   
    this.loginForm = this.formBuilder.group({
      customersid : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      carsmodel : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    })
   }

  ngOnInit(): void {
  }

  // login(){
  //   console.log("this is the log in button",this.customerid,this.carmodel);
  //   this.isLoginSuccess = true;
  // }







  logins(){
    this.ssubmitted = true;
    //console.log("CONTROLS SUBITTED",this.loginForm.controls);
    //console.log("LOGIN SUBITTED",this.loginForm.value);
    console.log("Controls are valid",this.loginForm.controls);
    if(this.loginForm.valid){
      alert("Form is valid ... submitted successfully!")
      this.logclear()
    }else{
      alert("Form is invalid ... please try again!")
    }
    localStorage.setItem("LOGINSLISTS",JSON.stringify(this.loginForm.value));
  }




  get f(){
    return this.loginForm.controls;
  }


  logclear(){
    this.loginForm.reset();
  }











}
