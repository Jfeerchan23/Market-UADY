import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guardas/auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    loadChildren: () => import('./componentes/dashboard/dashboard.module').then((x) => x.DashboardModule),
    canActivate: [AuthGuard],
  },
  {path: 'logout',redirectTo:'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
