import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject,BehaviorSubject, Subscription } from 'rxjs';
import { filter} from 'rxjs/operators'
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit,OnDestroy {

  mysubscribtion!: Subscription;

  ngOnDestroy(): void {
   // throw new Error('Method not implemented.');
   this.mysubscribtion.unsubscribe();
  }
  
  // promise!: Promise<any>;
  // observable!:Observable<any>;

  // 

  ngOnInit(): void {
    //example of promise
    /*
     const promise = new Promise((resolve) => {
      console.log('Inside Promise');
      setTimeout(() => { 
        resolve('Promise Working 1 ....'); 
        resolve('Promise Working 2....'); 
        resolve('Promise Working 3....'); 
        resolve('Promise Working 4....'); 

      } , 1000)
    });   

    promise.then(result=>console.log(result));
*/
     // code to show observable can be unsubscribe
     /*
    const observable = new Observable(sub => {
      let counter = 0; 
      setInterval(() => {
        counter = counter + 1;
        sub.next('counter :: ' + counter);
      },1000)
    })

    this.mysubscribtion = observable.subscribe(result => console.log(result));
    *

    // code to show observable return multiple value
   /* const observable =  new Observable((sub)=>{
      console.log('Inside Observable');
      setTimeout(() =>{ 
        sub.next('Observable calling 1....');
        sub.next('Observable calling 2....');
        sub.next('Observable calling 3....');
        sub.next('Observable calling 4....');

      }, 1000)
    })

    observable.pipe(filter(d => d === 'Observable calling 1....'))
    .subscribe(result=>console.log(result)); 
    */

    /*
    // code to show the difference between Observable and Subject
    const observable = new Observable(sub => sub.next(Math.random()));
    
    // subscriber 1
    observable.subscribe(d=> console.log(d));
    
    // subscriber 2
    observable.subscribe(d=> console.log(d));

    // Subject
    const sub =new Subject();
    
    
    sub.subscribe(d => console.log('from subject 1:: ' + d));
    sub.subscribe(d => console.log('from subject 2:: ' + d));

    sub.next(Math.random());
    */

    // different example to show SUbject as cosumer
    /*
    const data = ajax('https://jsonplaceholder.typicode.com/users');
    data.subscribe(data1 => console.log(data1));
    data.subscribe(data1 => console.log(data1));*/
    
    /*
    //Subject as consumer
    const subject = new Subject();
    
    subject.subscribe(data1 => console.log(data1));
    subject.subscribe(data1 => console.log(data1));

    const result = data.subscribe(subject);
    */

    // Example of behaviour subject
    const bSubject = new BehaviorSubject(20);
    
    bSubject.next(2000);
    bSubject.subscribe(d => console.log('data from behaviour Subject value :' + d ));
    const subject = new Subject();
    
    // until this point no value display from subject
    subject.subscribe(data => console.log('data from subject : ' + data)); 

    subject.next(200);

   
    



  }

}
