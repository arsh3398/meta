import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  icon=faX;
  isActive=false;
  styles={'width':'fit-content', 'display':'block'}
  styleBackground={'filter':'blur(10px)'}
  displayChange(){
    if (this.isActive==false) {
      this.isActive=true
    } else {
      this.isActive=false
    }
  }
  constructor(private builder: FormBuilder, private http:HttpClient){}
  public captchaResolved : boolean = false;
  CareerForm=this.builder.group({
    firstName:this.builder.control('', Validators.required),
    lastName:this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    recaptchaReactive: this.builder.control(''),
  })
  onSubmit(){
    if (this.CareerForm.valid) {
      let bodyData={
        firstName : this.CareerForm.value.firstName,
        lastName : this.CareerForm.value.lastName,
        email : this.CareerForm.value.email,
      };
      this.http.post('http://127.0.0.1:3000/add/jobrequest',bodyData,{responseType:'text'}).subscribe((resultData:any)=>{
        alert('Form submitted!');

      })
    }
    else{
      alert('Form Invalid')
    }
  }
  checkCaptcha(captchaResponse : string) {
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
}
closeForm(){
  this.isActive=false;
}
}
