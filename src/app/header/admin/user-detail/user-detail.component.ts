import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit, OnDestroy {
  selectedUser: User;
  private userDetailsSubscription: Subscription;

  constructor(@Inject(USER_TOKEN) private userService: UserService) {}

  ngOnInit() {
    this.userDetailsSubscription = this.userService.onUserDetailsClick.subscribe((data: User) => {
      this.selectedUser = data;
    });
  }

  ngOnDestroy() {
    this.userDetailsSubscription.unsubscribe();
  }
}
