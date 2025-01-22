import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

   message:string = "Interpolation Message";
   imgUrl:string= "assets\IMG_1810.JPG";
   btnStatus:boolean=false;
   userName:string="";
   //changeTitle:string="Change Interpolation Message";

   changeTitle(){
    this.message = "Change Interpolation Message";
   }




}
