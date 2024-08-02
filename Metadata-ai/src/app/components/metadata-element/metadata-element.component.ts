import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-metadata-element',
  templateUrl: './metadata-element.component.html',
  styleUrls: ['./metadata-element.component.scss']
})
export class MetadataElementComponent {
constructor(private http: HttpClient, private route: ActivatedRoute){}
textContent: any;
ngOnInit() {
  // Get the text content ID from the route parameters.
  // const textContentId = this.route.snapshot.paramMap.get('id');

  // Fetch the text content from the API.
  this.http.get(`http://127.0.0.1:3000/view/textData/6528511e8112eb60c3a7460c`).subscribe(
    (data:any) => {
      this.textContent = data;
    },
  );
}
}
