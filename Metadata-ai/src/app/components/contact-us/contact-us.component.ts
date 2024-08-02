import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  constructor(private builder: FormBuilder, private http: HttpClient) { }
  ContactsForm = this.builder.group({
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    phoneNumber: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.maxLength(10)])
    ),
    wantAs: this.builder.control('', Validators.required),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
  });
  onSubmit() {
    if (this.ContactsForm.valid) {
      let bodyData = {
        "firstName": this.ContactsForm.value.firstName,
        "lastName": this.ContactsForm.value.lastName,
        "phoneNumber": this.ContactsForm.value.phoneNumber,
        "wantAs": this.ContactsForm.value.wantAs,
        "email": this.ContactsForm.value.email,
      };
      console.log(bodyData)
      this.http.post('http://127.0.0.1:3000/addquery', bodyData,{responseType:'text'}).subscribe((resultData:any) => {
        alert('Form submiited, we will contact you soon');
      });
    } else {
      console.log('Invalid');
      alert('Please submit valid data');
    }
  }
}
