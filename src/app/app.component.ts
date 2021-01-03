import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  myId = "idvalue"
  public myName = 'nagarajuInputDaata'
  public successClass = "text-success"
  public hasError = false
  public special = true
  public messageClass = {
    "text-success" : !this.hasError,
    "text-danger": this.hasError,
    "text-spacial": this.special
  }
 
  public message=''
  logMessage(value) {
    console.log(value);
    
  }
}