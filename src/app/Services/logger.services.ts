import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService{
    logMessage(name:string,status:string){
console.log(`${name} ${status}`)
    }
}