import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.scss']
})
export class CarManagementComponent implements OnInit {



  //1.1 cars management

  // carmodels = "";
  // carcolor = "";

  // carList:any = [];
  // isLogitSuccess = false;

  // selectedIndex:any;
  // selectedObject:any;
  // isEditOperation = false;

  //1.1 cars management end








  searchedbox = '';
  carForm: FormGroup;
  submitted = false;
  carsList: any = [];

  issubmitoperation = false;
  selectedIndex: any;
  selectedObject: any;


  constructor(private formBuilder: FormBuilder) {

    // this.carList = JSON.parse(localStorage.getItem('CAR_LIST') || '')
    // let data = localStorage.getItem('CAR_LIST');
    // if(data){
    //   this.carList = JSON.parse(data);
    // }


    this.carForm = this.formBuilder.group({
      carmodels: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(9)]],
      carcolor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]]
    })

    let data = localStorage.getItem('CARSLIST')
    if (data) {
      this.carsList = JSON.parse(data);
    }
  }


  ngOnInit(): void {
    let testtid = this.uniqueid();
    console.log('testtid', testtid);

  }



  // 1.1 cars management

  // cSubmit(){
  //   let car ={
  //     carmodels : this.carmodels,
  //    carcolor : this.carcolor
  //   }
  //   this.carList.push(car)
  //   localStorage.setItem("CAR_LIST",JSON.stringify(this.carList));
  //   console.log("this is c submit button",this.carList);
  //   // this.isLogitSuccess = true;
  //   this.caclear()
  // }

  // cUpdate(){
  //   console.log("Selected Index", this.carmodels);
  //   console.log("Selected Objects", this.carcolor);

  //   this.carList[this.selectedIndex].carmodels = this.carmodels;
  //   this.carList[this.selectedIndex].carcolor = this.carcolor;
  //   localStorage.setItem("CAR_LIST",JSON.stringify(this.carList));
  //   this.isEditOperation = false;
  //   alert("Submitted Successfully");
  //   this.caclear()

  // }

  // cEdit(index:any,obj:any){
  //   this.selectedIndex = index;
  //   this.selectedObject = obj;

  //   console.log("this is C edit button");

  //   this.carmodels = obj.carmodels;
  //   this.carcolor = obj.carcolor;
  //   this.isEditOperation = true;
  // }

  // cDelete(index:any){
  //   console.log("this is C delete button",index);
  //   this.carList.splice(index,1)
  //   localStorage.setItem("CAR_LIST",JSON.stringify(this.carList));
  // }

  // caclear(){
  //   this.carmodels = "";
  //   this.carcolor ="";
  // }

  //1.1 car management end



  abrSubmit() {
    this.submitted = true;
    //console.log("Control works",this.carForm.controls);
    //console.log("Submit works",this.carForm.value);

    console.log("Controls are valid", this.carsList);
    if (this.carForm.valid) {
      this.carForm.value.id = this.uniqueid();
      this.carsList.push(this.carForm.value)
      alert("Form is Valid...Submit Successfully!")
      this.caclear()
    }
    else {
      alert("Form is invalid....Please try again!")
    }
    localStorage.setItem("CARSLIST", JSON.stringify(this.carsList));

  }

  carUpdate() {
    this.carsList[this.selectedIndex].carmodels = this.carForm.value.carmodels;
    this.carsList[this.selectedIndex].carcolor = this.carForm.value.carcolor;

    this.issubmitoperation = false;
    alert("Updated Successfully");
    this.caclear()
  }

  carEdit(obj: any) {
    this.selectedIndex = this.carsList.findIndex((xt:any)=>xt.id === obj.id);
    console.log('this.selectedIndex', this.selectedIndex)
    this.selectedObject = obj;

    this.issubmitoperation = true;
    this.carForm.patchValue({
      carmodels: obj.carmodels,
      carcolor: obj.carcolor
    })
  }

  carDelete(id:any) {
    this.selectedIndex = this.carsList.findIndex((xt:any)=>xt.id === id);
    
    this.carsList.splice(this.selectedIndex, 1);
    localStorage.setItem("CARSLIST", JSON.stringify(this.carsList));
  }

  get f() {
    return this.carForm.controls;
  }

  caclear() {
    this.carForm.reset();
  }

  uniqueid() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
}
