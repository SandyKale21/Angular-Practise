import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ResloveGaurdGuard implements Resolve<any> {
  constructor(private userService : UserService ){}
  resolve() {
    return this.userService.getAllUSerData();
  }

  
}
