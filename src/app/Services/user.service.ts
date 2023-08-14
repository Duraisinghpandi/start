import { User } from "src/Models/User";
import { LoggerService } from "./logger.services";
import { EventEmitter, Injectable } from "@angular/core";
@Injectable()
export class UserService{
    users:User []=[
new User('Steve','male','Monthly','Active'),
new User('Ponting','male','Monthly','Active'),
new User('Pandi','male','Monthly','Active'),
    ]
    constructor(private logService:LoggerService){

    }
    onUserDetailsClick:EventEmitter<User>=new EventEmitter<User>()
getAllUsers(){
    return this.users
}
createUser(name:string,
    gender:string,
    subType:string,
    status:string){
let user=new User(name,gender,subType,status)
this.users.push(user)

this.logService.logMessage(name,status)
}
// removeUser(user: User) {
//     const index = this.users.indexOf(user);
//     if (index !== -1) {
//         this.users.splice(index, 1);
//     }
// }
removeUser(user:User){
    const index=this.users.indexOf(user);
    if(index !== -1){
        this.users.splice(index,1)
}
    
}
// removeUser(user: User) {
//     this.users = this.users.filter(u => u !== user);
//     console.log(this.users)
//   }
onShowDetails(user:User){
    this.onUserDetailsClick.emit(user)

}
} 