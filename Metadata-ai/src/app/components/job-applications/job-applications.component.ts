import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.scss']
})
export class JobApplicationsComponent {
  constructor(private http:HttpClient){this.getAllApplications()}
jobApplicationarray:any[]=[];
getAllApplications(){
this.http.get('http://127.0.0.1:3000/view/jobrequest').subscribe((resultData:any)=>{
  this.jobApplicationarray = resultData;
})
};
}
