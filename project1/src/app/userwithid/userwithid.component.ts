import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userwithid',
  templateUrl: './userwithid.component.html',
  styleUrls: ['./userwithid.component.css']
})
export class UserwithidComponent implements OnInit {

  user:any
  constructor(private activatedRoute:ActivatedRoute,private userService: UserService){}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.userService.getUserData(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      this.user = data;
    }  
    )

   /* this.userService.getAllUSerData().subscribe(
      (data)=>{
        this.userData = data;
      },(error)=>{this.errorMessage = 'Some internal issue'}
    ) */
    //throw new Error('Method not implemented.');
  }

}
