import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
//insertar signupcomponents

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { TrailerAdminComponent } from './components/trailer-admin/trailer-admin.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrailerListComponent } from './components/trailer-list/trailer-list.component';
import { TrailerPreviewComponent } from './components/trailer-preview/trailer-preview.component';
import { SearchComponent } from './components/search/search.component';
import { StudentComponent } from './components/student/student.component';
import { AreaComponent } from './components/area/area.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { GradeComponent } from './components/grade/grade.component';
import { ScoreComponent } from './components/score/score.component';
import { ScoreComponent2 } from './components/score-student/score.component';
import { ScoreComponent3 } from './components/score-teacher/score.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { AttendanceComponent2 } from './components/attendance-teacher/attendance.component';
import { AttendanceComponent3 } from './components/attendance-student/attendance.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SearchPipe,
    TrailerAdminComponent,
    SigninComponent,
    SignupComponent,
    TrailerListComponent,
    TrailerPreviewComponent,
    SearchComponent,
    StudentComponent,
    AreaComponent,
    AttendanceComponent,
    GradeComponent,
    ScoreComponent,
    SubjectComponent,
    TeacherComponent,
    ScoreComponent2,
    ScoreComponent3,
    AttendanceComponent2,
    AttendanceComponent3,
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
