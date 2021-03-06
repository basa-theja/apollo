import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  taxForm:FormGroup;
  employeeForm:FormGroup;
  insuranceForm:FormGroup;
  uploadImg:String="assets/upload.png";
  downloadImg="assets/download.png";
  tickImage="assets/tick.jpg";
  errorImage="assets/error.png";
  @Output() OnToggle= new EventEmitter();
  constructor(private fb:FormBuilder) { }
 

  ngOnInit(): void {
 
    this.employeeForm=this.fb.group(
      { employeeInfo:['',[Validators.required]],
        socialSecurity:['',[Validators.required]] }
    )

    this.taxForm=this.fb.group( 
      {employeeCF:['',[Validators.required]],
    employeeTF:['',[Validators.required]],
  employerBC:['',[Validators.required]]})

    this.insuranceForm=this.fb.group(
     {healthIC:['',[Validators.required]],
    disabilityIC:['',[Validators.required]],
  dentalAndVision:['']}
    )
   
    

  }

onsubmit(){
  if(this.employeeForm.valid && this.taxForm.valid && this.insuranceForm.valid){
    this.OnToggle.emit("true");
  }
  else{
    this.OnToggle.emit("false");
  }

}

  






  



}
