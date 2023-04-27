import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropzoneareaComponent } from './dropzonearea/dropzonearea.component';
import { AngformComponent } from './angform/angform.component';
import { ReportsComponent } from './reports/reports.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path :'', redirectTo: '/home', pathMatch: 'full'},
  // { path: 'app', component: AppComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dropzone', component: DropzoneareaComponent },
  { path: 'ang-forms', component: AngformComponent },
  { path: 'reports', component: ReportsComponent},
  { path : '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
