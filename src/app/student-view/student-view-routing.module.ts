import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './student-view.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Courses1Component } from './courses1/courses1.component';
import { RequestASessionComponent } from './request-a-session/request-a-session.component';
import { Tasks1Component } from './tasks1/tasks1.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [{ path: '', component: StudentViewComponent, children: [{ path: '', redirectTo: 'dashboard1', pathMatch: 'full' }, { path: 'dashboard1', component: Dashboard1Component, data: { text: 'Dashboard (1)' } }, { path: 'courses1', component: Courses1Component, data: { text: 'Courses (1)' } }, { path: 'request-a-session', component: RequestASessionComponent, data: { text: 'Request a Session' } }, { path: 'tasks1', component: Tasks1Component, data: { text: 'Tasks (1)' } }, { path: 'my-profile', component: MyProfileComponent, data: { text: 'My Profile' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentViewRoutingModule {
}
