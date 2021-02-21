import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';
import { NewComponent } from './home/new/new.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: DetailComponent },
  { path: 'new', component: NewComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
