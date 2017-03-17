import { Component, OnInit } from '@angular/core';
import { MyGlobalsService } from '../my-globals.service' // add import

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  mySharedValue: string;  // add

  constructor(private globals: MyGlobalsService) { }  // insert

  ngOnInit() {
    this.mySharedValue = this.globals.MySharedValue;  // add
  }
  
  updateService() {
    this.globals.MySharedValue = this.mySharedValue;  // add
  }

}
