import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData:any;
  errorMessage:string = "Loading.....";
  notificationMessage!: string;

  strv:string = "1,2,3";
  arrayv:string[] = ['1','2','3'];

  ngOnInit():void{
    this.userData = this.activatedRoute.snapshot.data['data'];
  this.notitifcationService.subject.subscribe(d => this.notificationMessage = d);
  console.log(this.notificationMessage);

  }

/*
  ngOnInit():void{
    this.userService.getAllUSerData().subscribe(
      (data)=>{
        this.userData = data;
      },(error)=>{this.errorMessage = 'Some internal issue'}
    )
  }
*/
  constructor(private userService:UserService,private activatedRoute: ActivatedRoute,private notitifcationService:NotificationServiceService ){

  }

}
