import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentViewRoutingModule } from './student-view-routing.module';
import { StudentViewComponent } from './student-view.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgcFormsModule, IgxChipsModule, IgxCheckboxModule, IgxAccordionModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { Courses1Component } from './courses1/courses1.component';
import { RequestASessionComponent } from './request-a-session/request-a-session.component';
import { Tasks1Component } from './tasks1/tasks1.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    StudentViewComponent,
    Dashboard1Component,
    Courses1Component,
    RequestASessionComponent,
    Tasks1Component,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    StudentViewRoutingModule,
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
export class StudentViewModule {
}
