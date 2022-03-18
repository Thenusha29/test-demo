import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { P404Component } from './views/error/404.component';



export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    //redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: 'dashboard',
        loadChildren:() => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'freelancers',
        loadChildren: () => import('./views/Freelancers/freelancers.module').then(m => m.FreelancersModule)
      },
      {
        path:'business',
        loadChildren: () => import('./views/business/business.module').then(m => m.BusinessModule)
      },
      {
        path:'home',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'about-us',
        loadChildren: () => import('./views/about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path:'public-freelancer',
        loadChildren: () => import('./views/public-freelancer/public-freelancer.module').then(m => m.PublicFreelancerModule)
      },
      {
        path:'public-business',
        loadChildren: () => import('./views/public-business/public-business.module').then(m => m.PublicBusinessModule)
      },
      {
        path:'product',
        loadChildren: () => import('./views/product/product.module').then(m => m.ProductModule)
      },
      {
        path:'register',
        loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule)
      },
      {
        path:'login',
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  // {
  //   path: 'Home',
  //   component: HomeComponent,
  //   data: {
  //     title: 'Home'
  //   }
  // },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
