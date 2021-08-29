import {LayoutComponent} from './normal/layout/layout.component';
import {Routes} from '@angular/router';
import {AuthLoginGuard} from './core/service/auth/auth-login.guard';
import {LoginComponent} from './normal/login/login.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {path: 'login', component: LoginComponent},
  {
    path: '', component: LayoutComponent, children: [
      {path: 'index', loadChildren: () => import('./page/index/index.module').then(m => m.IndexModule)},
      {path: 'detail', loadChildren: () => import('./page/detail/detail.module').then(m => m.DetailModule)},
      {path: 'user', loadChildren: () => import('./page/portal/user/user.module').then(m => m.UserModule)},
    ]
  },
  {
    path: 'editor',
    loadChildren: () => import('./page/editor/editor.module').then(m => m.EditorModule),
    canActivate: [AuthLoginGuard]
  },
];
