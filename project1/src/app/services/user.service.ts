import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {catchError,map} from "rxjs/operators";
import {Observable, throwError} from 'rxjs';
//import { of } from 'rxjs';
//import "rxjs/add/observable/throw";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  // http:HttpClient = new HttpClient();

  /*userDataService:any[] = */

  /*getAllUSerData(){
    return [
      {id:101,name:'sandesh',salary:'180000',DOB:new Date("09/21/1984")},
      {id:102,name:'chetan',salary:'160000',DOB:new Date("06/01/1989")},
      {id:101,name:'sheetal',salary:'150000',DOB:new Date("05/25/1989")},
      {id:101,name:'sandip',salary:'79000',DOB:new Date("08/21/1991")}
    ]; 
  }*/



  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  getAllUSerData(){
     return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      map(data=> {return data;}),catchError(error => {
        console.log(error)
        return throwError(error.message);
     })
     )

  }

  getUserData(id:number){
    console.log("id :: " + id);
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id).pipe(
     map(data=> {return data;}),catchError(error => {
       console.log(error)
       return throwError(error.message);
    })
    )

 }


}
