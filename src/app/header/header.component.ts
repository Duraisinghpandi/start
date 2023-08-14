import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
 
})
export class HeaderComponent {
  selectedTab: string = 'home';
  constructor(private service:SubscribeService){

  }
  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }
  
onSubscribe(){
  
  this.service.OnSubscribeClicked("Monthly")
}
}
