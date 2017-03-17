# angular2servicesDemo2
Demo of sharing values between components using Observables (BehaviorSubject) 

Part 1, This works but doesn't update app.component heading because it hasn't been told to refresh

So, now...

Part 2...


in my-globals.service.ts...
```javascript
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
```

in page1.component.ts...
```javascript
  updateService() {
    this.globals.setMySharedValue(this.mySharedValue);  // change
  }
```

in app.component.ts...
```javascript
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
  ```