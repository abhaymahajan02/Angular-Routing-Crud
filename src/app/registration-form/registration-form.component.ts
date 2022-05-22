import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  // email = "";
  // firstname = "";
  // lastname = "";
  // mobileno = "";
  // state = "";
  // city = "";
  // address = "";
  
  // registrationList:any =[];
  // isSignupSuccess = false;



  registForm : FormGroup;
  registSubmitted = false;

  constructor(private formBuilder:FormBuilder) {
    this.registForm = this.formBuilder.group({
      email : ['',[Validators.required,Validators.minLength(9),Validators.maxLength(30)]],
      firstname : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      lastname : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      mobileno : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]],
      state : ['',[Validators.required,Validators.minLength(7),Validators.maxLength(15)]],
      city : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      address : ['',[Validators.required,Validators.minLength(15),Validators.maxLength(50)]],
     
    })
   }

  ngOnInit(): void {
  }

  // signUp(){
  //   let register = {
  //     email : this.email, 
  //     firstname :this.firstname, 
  //    lastname : this.lastname, 
  //     mobileno :this.mobileno, 
  //     state :this.state, 
  //     city :this.city, 
  //     address :this.address
  //   }
  //   this.registrationList.push(register)
  //   console.log("this is the signup button", this.registrationList);
  //   this.isSignupSuccess = true;
  // }





  signsUps(){
    this.registSubmitted = true;
    //console.log("CONTROLS WORKED",this.registForm.controls);
    //console.log("SUBMIT WORKED",this.registForm.value);
    console.log("Controls are valid",this.registForm.controls);
    if(this.registForm.valid){
      alert("Form is valid...Submitted Successfully!")
      this.reclear()
    }else{
      alert("Form is invalid...Please try again!")
    }
    localStorage.setItem("REGISTSLIST",JSON.stringify(this.registForm.value));
  }


  get f(){
    return this.registForm.controls;
  }


  reclear(){
    this.registForm.reset();
  }

}
