import { Component, OnInit } from '@angular/core';
import { MyGlobalsService } from '../my-globals.service'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  mySharedValue: string; 

  constructor(private globals: MyGlobalsService) { }  

  ngOnInit() {
    this.mySharedValue = this.globals.MySharedValue; 
  }
  
  updateService() {
    this.globals.setMySharedValue(this.mySharedValue);  // change
  }

}
