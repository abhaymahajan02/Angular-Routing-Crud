import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {


  // //1.2 cars management
  
  // partsname = "";
  // partsid = "";

  // partsList:any = [];
  // iSubmitSuccess = false;

  // // isLogsubSuccess =false;

  // selectededIndex:any;
  // selectededObject:any;

  // //1.2 cars management end

  term ='';

  partsForm : FormGroup;

  Submitdd = false;
  partList:any=[];
  ispartoperation = false;

  selectedIndex:any;
  selectedObject:any;



  constructor(private formBuilder:FormBuilder) {

    //this.partsList = JSON.parse(localStorage.getItem('PARTS_LIST') || '')
    // let data = localStorage.getItem('PARTS_LIST');
    // if(data)  {
    //   this.partsList = JSON.parse(data);
    // }

    this.partsForm = this.formBuilder.group({
      partsname : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(9)]],
      partsid : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(5)]]
    })

    let data = localStorage.getItem('PARTSLISTSL');
    if(data)  {
       this.partList = JSON.parse(data);
    }

   }

  ngOnInit(): void {
    let testedid =  this.uniquedid();
    console.log('testedid', testedid);

  }


  //1.2 cars management

    // pSubmit(){
    //   let part = {
    //   partsname : this.partsname,
    //   partsid : this.partsid
    //   }
    //   this.partsList.push(part)
    //   localStorage.setItem("PARTS_LIST",JSON.stringify(this.partsList));
    //   console.log("this is the p submit button",this.partsList);
    //   // this.isLogsubSuccess = true;
    //   this. paclear()
    // }

    // pUpdate(){
    //   console.log("Selecteded Index", this.partsname);
    //   console.log("Selected Object", this.partsid);

    //   this.partsList[this.selectededIndex].partsname = this.partsname;
    //   this.partsList[this.selectededIndex].partsid = this.partsid;
    //   localStorage.setItem("PARTS_LIST",JSON.stringify(this.partsList));
    //   this.iSubmitSuccess = false;
    //   alert("Submitted Successfully");
    //   this.paclear()
    // }

    // pEdit(index:any, obj:any){
    // this.selectededIndex = index;
    // this.selectededObject = obj;

    //   console.log("this is p edit");

    //   this.partsname = obj.partsname;
    //   this.partsid = obj.partsid;
    //   this.iSubmitSuccess = true;
    // }

    // pDelete(index:any){
    //   console.log("this is p Delete");
    //   this.partsList.splice(index,1)
    //   localStorage.setItem("PARTS_LIST",JSON.stringify(this.partsList));
    // }

    // paclear(){
    //   this.partsname = "";
    //   this.partsid = "";
    // }

// 1.2 cars management end


  pbSubmit(){
    this.Submitdd = true;
    //console.log("Controls Working", this.partsForm.controls);
    //console.log("Submit Working", this.partsForm.value);
    console.log("Controls are valid",this.partList);
    if(this.partsForm.valid){
      this.partsForm.value.id = this.uniquedid();
      this.partList.push(this.partsForm.value)
      alert("Form is valid...Submitted Successfully!")
      this.clear()
    }else{
      alert("Form is invalid...Please try again!")
    }
    localStorage.setItem("PARTSLISTSL",JSON.stringify(this.partList));
    
  }



  partsUpdate(){
    this.partList[this.selectedIndex].partsname = this.partsForm.value.partsname;
    this.partList[this.selectedIndex].partsid = this.partsForm.value.partsid;
    
    this.ispartoperation = false;
    alert("Updated Successfully");
    this.clear()
  }


  partEdit(obj:any){
    this.selectedIndex = this.partList.findIndex((xp:any)=>xp.id === obj.id);
    console.log('this.selectedIndex', this.selectedIndex)
    this.selectedObject = obj;

    
    console.log("Object",obj);

    this.ispartoperation = true;
    
    this.partsForm.patchValue({
      partsname:obj.partsname,
      partsid:obj.partsid
    })
  }

  partDelete(id:any){
    this.selectedIndex = this.partList.findIndex((xp:any)=>xp.id === id);

    this.partList.splice(this.selectedIndex,1);
    localStorage.setItem("PARTSLISTSL",JSON.stringify(this.partList));
  }


 get f(){
   return this.partsForm.controls;
 }


 clear(){
   this.partsForm.reset();
 }

  uniquedid(){
    return '_' + Math.random().toString(36).substr(2, 9);
  };


}
