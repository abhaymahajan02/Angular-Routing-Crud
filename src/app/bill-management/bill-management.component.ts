import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bill-management',
  templateUrl: './bill-management.component.html',
  styleUrls: ['./bill-management.component.scss']
})
export class BillManagementComponent implements OnInit {

  // //1.4 cars management
  
  // paymentamount = "";
  // paymentmethod = "";
  
  // paymentList:any = [];  
  // isSubSuccess = false;
  // // isLogsSuccess = false;

  // selectingIndex:any;
  // selectingObject:any;
  
  // //1.4 cars management end


  searchbox ='';
  billForm:FormGroup;
  
  billList:any = [];

  submit = false;
  iseditoperation = false;

  selectedsIndex:any;
  selectedsObj:any;
  





  constructor(private formBuilder:FormBuilder) { 

    //this.paymentList = JSON.parse(localStorage.getItem('PAYMENT_LIST') || '')
      // let data = localStorage.getItem('PAYMENT_LIST');
      // if(data){
      //   this.paymentList = JSON.parse(data);
      // } 
   
   
     this.billForm = this.formBuilder.group({
      paymentamount : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]],
      paymentmethod : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]]
     })
   
     let data = localStorage.getItem('BILLIST');
     if(data){
       this.billList = JSON.parse(data);
     } 
     
    }

  ngOnInit(): void {
    let testsid = this.randomsid();
    console.log('testsid', testsid);
  }


  // //1.4 cars management

  // biSubmit(){
  //   let bills = {
  //     paymentamount : this.paymentamount,
  //     paymentmethod : this.paymentmethod
  //   }
  //   this.paymentList.push(bills)
  //   localStorage.setItem("PAYMENT_LIST",JSON.stringify(this.paymentList));
  //   console.log("this is b submit button",this.paymentList);
  //   // this.isLogsSuccess = true;
  //   this.biclear()
  // }

  // biUpdate(){
  //   console.log("Selecting Index", this.paymentamount);
  //   console.log("Selecting Object", this.paymentmethod);

  //   this.paymentList[this.selectingIndex].paymentamount = this.paymentamount;
  //   this.paymentList[this.selectingIndex].paymentmethod = this.paymentmethod;
  //   localStorage.setItem("PAYMENT_LIST",JSON.stringify(this.paymentList));
  //   this.isSubSuccess = false;
  //   alert("Submitted Successfully");
  //   this.biclear()
  // }

  // bEdit(index:any, obj:any){
  //   this.selectingIndex = index;
  //   this.selectingObject = obj;
  //   console.log("this is the b edit button");

  //   this.paymentamount = obj.paymentamount;
  //   this.paymentmethod = obj.paymentmethod;
  //   this.isSubSuccess = true;
  // }

  // bDelete(index:any){
  //   console.log("this is the b delete button",index);
  //   this.paymentList.splice(index,1)
  //   localStorage.setItem("PAYMENT_LIST",JSON.stringify(this.paymentList));
  // }
  // biclear(){
  //   this.paymentamount = "";
  //   this.paymentmethod ="";  
  // }

  // //1.4 cars management end








  bSubmit(){
    this.submit = true;
    //console.log("Controls works", this.billForm.controls);
    //console.log("Submitted works", this.billForm.value);
   
    
    if(this.billForm.valid){
      this.billForm.value.id = this.randomsid();
      this.billList.push(this.billForm.value)
      alert("Form is valid... Submitted Successfully...!")
      this.cclear()
      }
      else{
        
      alert("Form is invalid...Please try again...!")
    }

    console.log("controls are valid",this.billList);
    localStorage.setItem("BILLIST",JSON.stringify(this.billList));
  }

  billUpdate(){
    
    this.billList[this.selectedsIndex].paymentamount = this.billForm.value.paymentamount,
    this.billList[this.selectedsIndex].paymentmethod = this.billForm.value.paymentmethod

    this.iseditoperation = false;
    alert("Update successfully");
    this.cclear()


  }

  editButton(obj:any){
    this.selectedsIndex = this.billList.findIndex((xy:any)=>xy.id === obj.id);
    console.log('this.selectedsIndex', this.selectedsIndex)
    this.selectedsObj = obj;

    console.log("this is edit button");
    this.iseditoperation = true;

    this.billForm.patchValue({
      paymentamount:obj.paymentamount,
      paymentmethod:obj.paymentmethod
    })
  }

  deleteButton(id:any){
    this.selectedsIndex = this.billList.findIndex((xy:any)=>xy.id === id);
    
    this.billList.splice(this.selectedsIndex,1)
    localStorage.setItem("BILLIST",JSON.stringify(this.billList));
  }

  get f(){
    return this.billForm.controls;
  }

  cclear(){
    this.billForm.reset();
  }

  randomsid() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  
}
