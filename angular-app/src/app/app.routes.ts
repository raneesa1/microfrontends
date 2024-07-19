import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: '/angular-profilePage', component: ProfileComponent },
    {path:'/angular-cartPage',component:CartComponent},
    { path: '**', component: EmptyRouteComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule]
})
export class AppRoutingModule { }