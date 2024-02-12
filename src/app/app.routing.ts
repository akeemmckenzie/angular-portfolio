import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PreventUnsavedChanges } from './_gaurds/prevent-unsaved-changes.guard';

const routes: Routes = [
  { path: 'angular-portfolio/home', component: HomeComponent },
  { path: 'angular-portfolio/projects', component: ProjectsComponent },
  { path: 'angular-portfolio/contact', component: ContactComponent, canDeactivate: [PreventUnsavedChanges] },
  { path: 'angular-portfolio/thankYou', component: ThankYouComponent },
  { path: '**', redirectTo: 'angular-portfolio/home', pathMatch: 'full' },
];

export const AppRoutes = RouterModule.forChild(routes);
