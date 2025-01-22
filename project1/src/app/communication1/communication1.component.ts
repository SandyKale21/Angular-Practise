import { Component } from '@angular/core';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-communication1',
  templateUrl: './communication1.component.html',
  styleUrls: ['./communication1.component.css']
})
export class Communication1Component {

  constructor(private notificationService:NotificationServiceService){

  }
  sendMessage(data:any){
    this.notificationService.sendNotification(data.value);
  }

}
