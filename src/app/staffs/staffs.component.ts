import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss']
})
export class StaffsComponent implements OnInit {



  //1.3 cars management

  //  staffshift = "";
  //  staffsalary = "";

  //  staffsList:any = [];

  //  //  isLogsbSuccess = false;

  //  isMitSuccess = false;

  //  selectedIndexes:any;
  //  selectedObjects:any;

  // 1.3 cars management end

  searchingbox = '';
  stafsList: any = [];
  staffForm: FormGroup;
  submittes = false;
  iseditoperations = false;

  selectedIndexes: any;
  selectedObjects: any;




  constructor(private formBuilder: FormBuilder) {

    //this.staffsList = JSON.parse(localStorage.getItem('STAFF_LIST') || '')
    // let data = localStorage.getItem('STAFF_LIST');
    // if (data){
    //   this.staffsList = JSON.parse(data);
    // }

    this.staffForm = this.formBuilder.group({
      staffshift: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
      staffsalary: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]

    })

    let data = localStorage.getItem("STAFSLSISTS");
    if (data) {
      this.stafsList = JSON.parse(data);
    }

  }

  ngOnInit(): void {
    let testid = this.randomid();
    console.log('testsid',testid);
  }



  //1.3 cars management

  // staSubmit(){
  //   let staff ={
  //     staffshift :this.staffshift,
  //     staffsalary :this.staffsalary
  //   }
  //   this.staffsList.push(staff)
  //   localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffsList));
  //   console.log("this is sta submit button", this.staffsList);
  //   // this.isLogsbSuccess = true;
  //   this.staclear()
  // }

  // staUpdate(){
  //   console.log("Selected Indexes", this.staffshift);
  //   console.log("Selected Objects", this.staffsalary);

  // this.staffsList[this.selectedIndexes].staffshift = this.staffshift;
  // this.staffsList[this.selectedIndexes].staffsalary = this.staffsalary;
  // localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffsList));
  // this.isMitSuccess = false;
  // alert("Submitted Successfully");
  // }


  // staEdit(index:any,obj:any){
  // this.selectedIndexes = index;
  // this.selectedObjects = obj;

  //   console.log("this is sta edit button");

  //   this.staffshift = obj.staffshift;
  //   this.staffsalary = obj.staffsalary;
  //   this.isMitSuccess = true;
  // }

  // staDelete(index:any){
  // console.log("this is sta delete button",index);
  // this.staffsList.splice(index,1)
  // localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffsList));
  // }

  // staclear(){
  //   this.staffshift = "";
  //   this.staffsalary = "";
  // }

  //1.3 cars management end 


  sffSubmit() {
    this.submittes = true;

    if (this.staffForm.valid) {
      this.staffForm.value.id = this.randomid();
      
      this.stafsList.push(this.staffForm.value)

      alert("Form is Valid...Submitted Successfully!")
      this.stclear()
    } else {
      alert("Form is invalid....Please try again!")
    }
    console.log("Controls are valid", this.stafsList);
    localStorage.setItem("STAFSLSISTS", JSON.stringify(this.stafsList));
  }

  stafUpdate() {

    this.stafsList[this.selectedIndexes].staffshift = this.staffForm.value.staffshift;
    this.stafsList[this.selectedIndexes].staffsalary = this.staffForm.value.staffsalary;

    this.iseditoperations = false;
    alert("Updated Successfully");
    this.stclear()
  }


  staffEdit(obj: any) {

    this.selectedIndexes = this.stafsList.findIndex((x:any)=>x.id === obj.id);
    console.log('this.selectedIndexes', this.selectedIndexes);
    this.selectedObjects = obj;

    this.iseditoperations = true;

    this.staffForm.patchValue({
      staffshift: obj.staffshift,
      staffsalary: obj.staffsalary
    })
  }

  staffDelete(id:any) {
    this.selectedIndexes = this.stafsList.findIndex((x:any)=>x.id === id);
    console.log('this.selectedIndexes', this.selectedIndexes)
    //console.log("delete button", index);
    this.stafsList.splice(this.selectedIndexes, 1)
    localStorage.setItem("STAFSLSISTS", JSON.stringify(this.stafsList));
  }


  get f() {
    return this.staffForm.controls;
  }

  stclear() {
    this.staffForm.reset();
    
  }

  randomid() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

}
