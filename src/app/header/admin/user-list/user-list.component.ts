import { Component, Inject } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService:UserService){

  }
userList=this.userService.getAllUsers()
showUserDetails(user:User){
 this.userService.onShowDetails(user) 
}
removeUser(user: User) {
  this.userService.removeUser(user);
}
}
