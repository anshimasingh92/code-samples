import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  post:any = {};

  constructor(private _router: Router, private _http: HttpClient) { }

  ngOnInit() {
  }
  
  create(){
    this._http.post('http://localhost:3000/create/', this.post).subscribe((resp: any) => {
      if (resp.success) {
      this._router.navigate(['/posts']);
      //alert('post created');
      }
      else {
        alert(resp.err);
      }
    });
  }

}
