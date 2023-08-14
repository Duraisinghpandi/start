import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  // constructor(private service:SubscribeService){

  // }
  //medhod 2//
  service=inject(SubscribeService)
onSubscribe(){
  
  this.service.OnSubscribeClicked("Monthly")
}
}

