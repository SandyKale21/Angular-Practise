import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 //Data from Parent to Child
  @Input()
  uname:string="";

 // Data from Child to Parent
 @Output()
 toParent:EventEmitter<string>=new EventEmitter();

 passData(){
  this.toParent.emit("Message from Child to Parent")
 }

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
