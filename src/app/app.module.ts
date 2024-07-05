import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { CourseComponent } from './components/course/course.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { StarterComponent } from './components/course-content/starter/starter.component';
import { QuestionComponent } from './components/course-content/question/question.component';
import { QustionTrackerComponent } from './components/course-content/qustion-tracker/qustion-tracker.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeSwitcherComponent,
    CourseComponent,
    CourseContentComponent,
    StarterComponent,
    QuestionComponent,
    QustionTrackerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
