import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CoursesComponent } from './courses/courses.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ExamMakerComponent } from './exam-maker/exam-maker.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { AboutComponent } from './about/about.component';
import { ExamsComponent } from './exams/exams.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]  },
  { path: 'staff', component: StaffComponent, canActivate: [AuthGuard]  },
  { path: 'examMaker', component: ExamMakerComponent, canActivate: [AuthGuard]  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]  },
  { path: 'exams', component: ExamsComponent, canActivate: [AuthGuard]  },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard]  },
  { path: 'blog', component: BlogComponent, canActivate: [AuthGuard]  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
