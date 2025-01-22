import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AgePipe } from './pipe/age.pipe';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserwithidComponent } from './userwithid/userwithid.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { AuthGuard } from './auth.guard';
import { ResloveGaurdGuard } from './guards/reslove-gaurd.guard';
import { NotificationServiceService } from './notification-service.service';
import { Communication1Component } from './communication1/communication1.component';
import { PractiseComponent } from './practise/practise.component';

const router:Routes=[
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UserComponent,
    resolve:{data:ResloveGaurdGuard},
    canActivate:[AuthGuard]
  },
  {path:'user/:id',component:UserwithidComponent,
    children:[ 
      {path:'',redirectTo:'address',pathMatch:'full'},
      {path:'address',component:AddressComponent},
      {path:'company',component:CompanyComponent}
    ]
  }, 
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'practise',component:PractiseComponent},
  {path:'**',redirectTo:'users'}
];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ChildComponent,
    AgePipe,
    UserComponent,
    AboutusComponent,
    ContactusComponent,
    UserwithidComponent,
    AddressComponent,
    CompanyComponent,
    Communication1Component,
    PractiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(router)
    
  ],
  providers: [UserService,ResloveGaurdGuard,NotificationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
