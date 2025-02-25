import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import PostResolve from './route/post-routing-resolve.service';

const postRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/post.component').then(m => m.PostComponent),
    data: {
      defaultSort: `id,${ASC}`,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    loadComponent: () => import('./detail/post-detail.component').then(m => m.PostDetailComponent),
    resolve: {
      post: PostResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    loadComponent: () => import('./update/post-update.component').then(m => m.PostUpdateComponent),
    resolve: {
      post: PostResolve,
    },
    data: {
      authorities: ['ROLE_ADMIN', 'ROLE_POSTER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./update/post-update.component').then(m => m.PostUpdateComponent),
    resolve: {
      post: PostResolve,
    },
    data: {
      authorities: ['ROLE_ADMIN', 'ROLE_POSTER'],
    },
    canActivate: [UserRouteAccessService],
  },
];

export default postRoute;
