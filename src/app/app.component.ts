import { Component } from '@angular/core';

// This doesn't work:
// import { initializeApp, database } from 'firebase';

// This does:
import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    constructor(private af: AngularFire) {

        const courses$: FirebaseListObservable<any> = af.database.list('courses');
        courses$.subscribe(
            val => console.log(val)
        );
    }
}
