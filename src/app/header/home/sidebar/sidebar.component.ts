import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})
export class SidebarComponent {
//How to provide dependency  
  constructor(private service:SubscribeService){

  }
onSubscribe(){
  
  this.service.OnSubscribeClicked("Monthly")
}
}
 