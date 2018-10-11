import { Component } from '@angular/core';
//import { Injectable } from '@angular/core';
import { DataService } from '.././data.service';


import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
//@Injectable()  

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  result:any; 
  constructor(private http: Http,private _dataService: DataService) {this.getUsers(); }

  getUsers() {
    console.log("outside");
    this.http.get("http://localhost:8000/data").pipe(
      map((res:Response) => {
        console.log("suppp");
        this.result = res;
        console.log("data",this.result);})
       
      );
      //console.log("data",this.result);
  }

  ngOnInit() {
  }
  
}
