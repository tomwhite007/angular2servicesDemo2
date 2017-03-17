import { Component } from '@angular/core';
import { MyGlobalsService } from './my-globals.service' // add import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  mySharedValue: string; // add

  constructor( private globals: MyGlobalsService) { } // add

  ngOnInit() {
    this.mySharedValue = this.globals.MySharedValue;  // add
  }
  
}
