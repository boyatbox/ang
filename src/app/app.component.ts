import { Component, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { HttpClient } from '@angular/common/http';

interface Person {
  fname: string;
  lname: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private apiData:any  = [];
  private _apiUrl: string = 'http://localhost:8080/api/per';
  constructor(private httpClient: HttpClient){
    this.getApiData();
  }
  ngAfterViewInit() {
    Feather.replace();
  }

  ngOnInit(): void {
    //this.http.get<Person>('http://localhost:8080/api/per').subscribe(data => {
      //console.log(data);
      //console.log("User ##: " + data.PersonID);
      //console.log("User ####: " + data.lname);
    //});
  }

  getApiData() {
 
    this.httpClient.get(this._apiUrl).subscribe((res) => {
      console.log(res);
      this.apiData = res;
    });
  }

}