import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from './lesson';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LessonService {

    constructor(private af: AngularFire) {
    }

    findAllLessons(): Observable<Lesson[]> {
        return this.af.database.list('lessons')
            .map(Lesson.fromJsonList);
    }
}
