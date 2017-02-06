import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2';
import { Course } from './course';
import { Lesson } from './lesson';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';

@Injectable()
export class CoursesService {

    constructor(private db: AngularFireDatabase) {
    }

    findAllCourses(): Observable<Course[]> {
        return this.db.list('courses').map(Course.fromJsonArray);
    }

    findCourseByUrl(courseUrl: string): Observable<Course> {
        return this.db.list('courses', {
            query: {
                orderByChild: 'url',
                equalTo: courseUrl
            }
        })
            .map(results => results[0]);
    }

    findLessonKeysPerCourseUrl(courseUrl: string, query: FirebaseListFactoryOpts = {}): Observable<string[]> {
        return this.findCourseByUrl(courseUrl)
            .switchMap(course => this.db.list(`lessonsPerCourse/${course.$key}`, query))
            .map(lessonsPerCourse => lessonsPerCourse.map(lesson => lesson.$key));
    }

    findLessonsForLessonKeys(lessonKeys$: Observable<string[]>): Observable<Lesson[]> {
        return lessonKeys$
            .map(lessonsPerCourse => lessonsPerCourse.map(lessonKey => this.db.object('lessons/' + lessonKey)))
            .flatMap(firebaseObservable => Observable.combineLatest(firebaseObservable));
    }

    loadFirstLessonsPage(courseUrl: string, pageSize: number): Observable<Lesson[]> {

        const firstPageLessonKeys$ = this.findLessonKeysPerCourseUrl(courseUrl, {
            query: {
                limitToFirst: pageSize
            }
        });

        return this.findLessonsForLessonKeys(firstPageLessonKeys$);
    }

    findAllLessonsForCourse(courseUrl: string): Observable<Lesson[]> {

        return this.findLessonsForLessonKeys(this.findLessonKeysPerCourseUrl(courseUrl));

    }
}
