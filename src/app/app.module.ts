import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { HomeComponent } from './home/home.component';
import { LessonService } from './shared/model/lesson.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './shared/model/courses.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LessonsListComponent,
        TopMenuComponent,
        CoursesComponent,
        CourseDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterModule.forRoot(routerConfig)
    ],
    providers: [
        LessonService,
        CoursesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
