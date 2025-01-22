import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  public subject = new Subject<string>();
  constructor() { }

  sendNotification(data:string){
    this.subject.next(data);
  }


}
