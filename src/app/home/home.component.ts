import { Component, OnInit } from '@angular/core';
import { LessonService } from '../shared/model/lesson.service';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lessons: Lesson[];

  constructor(private lessonService: LessonService) { }

  ngOnInit() {
    this.lessonService.findAllLessons()
      .do(console.log)
      .subscribe(
        lessons => this.lessons = lessons
      );
  }

}
