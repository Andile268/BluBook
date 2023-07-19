import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorViewComponent } from './tutor-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpSkillMeComponent } from './up-skill-me/up-skill-me.component';
import { ProfileComponent } from './profile/profile.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { MyGigGuideComponent } from './my-gig-guide/my-gig-guide.component';

const routes: Routes = [{ path: '', component: TutorViewComponent, children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }, { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } }, { path: 'up-skill-me', component: UpSkillMeComponent, data: { text: 'UpSkill Me' } }, { path: 'profile', component: ProfileComponent, data: { text: 'Profile' } }, { path: 'my-activity', component: MyActivityComponent, data: { text: 'My Activity' } }, { path: 'my-gig-guide', component: MyGigGuideComponent, data: { text: 'My Gig Guide' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorViewRoutingModule {
}
