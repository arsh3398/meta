import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customerqueries',
  templateUrl: './customerqueries.component.html',
  styleUrls: ['./customerqueries.component.scss']
})
export class CustomerqueriesComponent {
  contactedArray:any[]=[];
constructor(private http:HttpClient){this.viewAll()}
viewAll(){
  this.http.get('http://127.0.0.1:3000/viewquery').subscribe((resultdata:any)=>{
    this.contactedArray=resultdata;
  })
};
}
