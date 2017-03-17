import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';   // add
import {Observable} from 'rxjs/Observable';   // add

@Injectable()
export class MyGlobalsService {

  MySharedValue: string;  

  private _mySharedValueBS = new BehaviorSubject<string>('');   // add
  MySharedValue$ = this._mySharedValueBS.asObservable();   // add

  constructor() {
    this.MySharedValue = 'start value!'; 
    this._mySharedValueBS.next(this.MySharedValue);   // add
  }
  
  setMySharedValue(str) {                               // add                          
    this.MySharedValue = str;
    this._mySharedValueBS.next(this.MySharedValue);
  }

}
