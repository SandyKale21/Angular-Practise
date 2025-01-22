import { Component } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent {

  pageTitle : string = "Practice Page";
  btnStatus : boolean = true;
  name:string="Vrishank";



  users:string[] = ["Sandesh","Sheetal","Vrishank"];
  selectedCountry:string="Ind";
  countires:any[] =[
    {code:"Ind",name:"India"},
    {code:"UK",name:"United Kingdom"},
    {code:"USA",name:"United State"}
  ];

  public choise(countryCode:any){
  this.selectedCountry = countryCode.target.value;

  }



}
