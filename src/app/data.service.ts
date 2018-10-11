import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result:any;
  num:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("http://localhost:8000/data").pipe(
      map(result => {this.result = result.json()
      this.result = JSON.parse(this.result)
      console.log("heyu",typeof(this.result));
      this.num = this.result.hoststatuslist.recordcount;
      console.log("data",this.result.hoststatuslist.recordcount)}));
  }
}
