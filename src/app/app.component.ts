import { Component } from '@angular/core';

// This doesn't work:
// import { initializeApp, database } from 'firebase';

// This does:
import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {

    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(console.log);
    this.lesson$ = af.database.object('lessons/-Kbpzcnna8u2IVPxf0UM');
    this.lesson$.subscribe(console.log);
  }

  listPush() {
    this.courses$.push({ description: 'test new course'})
  }

  listRemove() {

  }

  listUpdate() {

  }

  objUpdate() {

  }

  objSet() {

  }
}
