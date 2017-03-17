import { Component, OnInit } from '@angular/core';
import { MyGlobalsService } from '../my-globals.service' // add import

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  mySharedValue: string;  // add

  constructor(private globals: MyGlobalsService) { }  // insert

  ngOnInit() {
    this.mySharedValue = this.globals.MySharedValue;  // add
  }
  
  updateService() {
    this.globals.MySharedValue = this.mySharedValue;  // add
  }

}
