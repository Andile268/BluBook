import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorViewRoutingModule } from './tutor-view-routing.module';
import { TutorViewComponent } from './tutor-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgcFormsModule, IgxChipsModule, IgxCheckboxModule, IgxAccordionModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { UpSkillMeComponent } from './up-skill-me/up-skill-me.component';
import { ProfileComponent } from './profile/profile.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { MyGigGuideComponent } from './my-gig-guide/my-gig-guide.component';

@NgModule({
  declarations: [
    TutorViewComponent,
    DashboardComponent,
    UpSkillMeComponent,
    ProfileComponent,
    MyActivityComponent,
    MyGigGuideComponent
  ],
  imports: [
    CommonModule,
    TutorViewRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxListModule,
    IgxAvatarModule,
    IgcFormsModule,
    IgxChipsModule,
    IgxCheckboxModule,
    FormsModule,
    IgxAccordionModule,
    IgxExpansionPanelModule
  ]
})
export class TutorViewModule {
}
