import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/model/courses.service';
import { Observable } from 'rxjs';
import { Lesson } from '../shared/model/lesson';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../shared/model/course';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
    lessons$: Observable<Lesson[]>;
    course$: Observable<Course>;

    constructor(private route: ActivatedRoute,
                private coursesService: CoursesService) {
    }

    ngOnInit() {
        const courseUrl = this.route.snapshot.params['id'];
        this.course$ = this.coursesService.findCourseByUrl(courseUrl);
        this.lessons$ = this.coursesService.findAllLessonsForCourse(courseUrl);
    }

}
