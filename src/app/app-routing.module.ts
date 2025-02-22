import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenberFormComponent } from './menber-form/menber-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { EventComponent } from './event/event.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {path: 'create', 
    pathMatch: 'full',
    component: MenberFormComponent},
    {
      path: '',
      pathMatch: 'full',
      component: MemberComponent
    },
    {
      path: ':id/edit',
      pathMatch: 'full',
      component: MenberFormComponent},
      {
        path:'dashboard',
        pathMatch:'full',
        component:DashboardComponent
      }
      ,
      {path:'tools',
      pathMatch:'full',
      component:ToolComponent
      }
      ,
      {
        path:'events',
        pathMatch:'full',
        component:EventComponent
      },
      {
        path:'articles',
        pathMatch:'full',
        component:ArticleComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
