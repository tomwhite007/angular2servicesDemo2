import { Component } from '@angular/core';
import { MyGlobalsService } from './my-globals.service'
import { Subscription } from 'rxjs/Subscription';  // add

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mySharedValueSubscription: Subscription;  // add
  title = 'app works!';
  mySharedValue: string; 

  constructor( private globals: MyGlobalsService) { } 

  ngOnInit() {
    this.mySharedValueSubscription = this.globals.MySharedValue$   // change
       .subscribe(str => this.mySharedValue = str);                // change
  }
  
}
