# angular2servicesDemo2
Demo of sharing values between components using Observables (BehaviorSubject) 

Part 1, This works but doesn't update app.component heading because it hasn't been told to refresh
So, now...
Part 2...


in my-globals.service.ts...
```javascript
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MyGlobalsService {

  MySharedValue: string;

  private _mySharedValueBS = new BehaviorSubject<string>('');
  MySharedValue$ = this._mySharedValueBS.asObservable();

  constructor() {
    this.MySharedValue = 'start value!';
    this._mySharedValueBS.next(this.MySharedValue);
   }
   
  setMySharedValue(str) {
    this.MySharedValue = str;
    this._mySharedValueBS.next(this.MySharedValue);
  }
```

in page1.component.ts...
```javascript
  updateService() {
    this.globals.setMySharedValue(this.mySharedValue);
  }
```

in app.component.ts...
```javascript
import { Subscription } from 'rxjs/Subscription'; // *** added

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mySharedValueSubscription: Subscription; // *** added
  title = 'app works!';
  mySharedValue: string;

  constructor( private globals: MyGlobalsService) { }

  ngOnInit() {                                                     // *** added
    this.mySharedValueSubscription = this.globals.MySharedValue$   // *** added
       .subscribe(str => this.mySharedValue = str);                // *** added
  }
  ```