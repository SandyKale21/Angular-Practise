import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userData:any;
  errorMessage:string = "Loading.....";

  ngOnInit():void{
    this.userService.getAllUSerData().subscribe(
      (data)=>{
        this.userData = data;
      },(error)=>{this.errorMessage = 'Some internal issue'}
    )
  }

  constructor(private userService:UserService ){

  }

  title = 'project1';
 
  //langList:string[] =['Java','Angular','Oracle','Cloud'];

  userList:any[]=[
    {uId:101,uName: 'Amar',uCity:'Pune'},
    {uId:102,uName: 'Akbar',uCity:'Mumbai'},
    {uId:103,uName: 'Anothony',uCity:'Jaipur'}
  ];

  isLoggedInUser:boolean=false;
  selectedCountryCode:string="";

  countries:any[]=[
    {code:'IND' , name:'India'},
    {code:'UK' , name:'United Kingdom'},
    {code:'USA' , name:'United State'}
  ]

  countryChange($event:any){
    console.log($event);
      this.selectedCountryCode= $event.target.value; 
  }

  userName:string="Sandesh Kale";

  childData:string="";

  receiveDataFromChildToParent(data:any){
    console.log(data);
    this.childData =data;
  }

  ;

}
