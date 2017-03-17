import { Injectable } from '@angular/core';

@Injectable()
export class MyGlobalsService {

  MySharedValue: string;  // add

  constructor() {
    this.MySharedValue = 'start value!';  // add
  }

}
