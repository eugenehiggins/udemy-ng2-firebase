import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

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
  firstCourse: any;

  constructor(private af: AngularFire) {

    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(console.log);
    this.lesson$ = af.database.object('lessons/-Kbpzcnna8u2IVPxf0UM');
    this.lesson$.subscribe(console.log);

    this.courses$.map(courses => courses[0])
      .subscribe(
        course => this.firstCourse = course
      )
  }

  listPush() {
    this.courses$.push({ description: 'test new course'})
      .then(
        () => console.log('List Push DONE'),
        console.error
      );
  }

  listRemove() {
    this.courses$.remove(this.firstCourse);
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, {description: 'Angular 2 blah blah'})
  }

  objUpdate() {

  }

  objSet() {

  }
}
