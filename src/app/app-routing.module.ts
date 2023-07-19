import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'tutor-view', loadChildren: () => import('./tutor-view/tutor-view.module').then(m => m.TutorViewModule) },
  { path: 'student-view', loadChildren: () => import('./student-view/student-view.module').then(m => m.StudentViewModule) },
  { path: 'splash-screen', component: SplashScreenComponent, data: { text: 'Splash Screen' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
