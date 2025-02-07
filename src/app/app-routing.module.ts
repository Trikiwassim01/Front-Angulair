import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenberFormComponent } from './menber-form/menber-form.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {path: 'create', 
    pathMatch: 'full',
    component: MenberFormComponent},
    {
      path: '',
      pathMatch: 'full',
      component: MemberComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
