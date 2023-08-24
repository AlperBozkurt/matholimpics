import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CoursesComponent } from './courses/courses.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ExamMakerComponent } from './exam-maker/exam-maker.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]  },
  { path: 'staff', component: StaffComponent, canActivate: [AuthGuard]  },
  { path: 'examMaker', component: ExamMakerComponent, canActivate: [AuthGuard]  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
