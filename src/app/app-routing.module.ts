import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthContextComponent} from "./components/auth-context/auth-context.component";
import {LoginPageComponent} from "./components/auth-context/inner-items/login-page/login-page.component";
import {SignUpPageComponent} from "./components/auth-context/inner-items/sign-up-page/sign-up-page.component";
import {DashBoardComponent} from "./components/dash-board/dash-board.component";
import {GuestContextComponent} from "./components/dash-board/components/guest-context/guest-context.component";
import {FrontPageComponent} from "./components/dash-board/components/front-page/front-page.component";
import {ReservationsComponent} from "./components/dash-board/components/reservations/reservations.component";
import {RoomManagementComponent} from "./components/dash-board/components/room-management/room-management.component";
import {EmployeeManagementComponent} from "./components/dash-board/components/employee-management/employee-management.component";
import {PaymentsComponent} from "./components/dash-board/components/payments/payments.component";

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component:AuthContextComponent, children:[
      {path:'login', component:LoginPageComponent},
      {path:'signup', component:SignUpPageComponent},
    ]},
  {path:'dashboard', component:DashBoardComponent, children:[
      {path:'', redirectTo: '/dashboard/front-page', pathMatch: 'full'},
      {path: 'front-page', component: FrontPageComponent},
      {path:'guest-management', component: GuestContextComponent},
      {path:'reservations', component: ReservationsComponent},
      {path:'room-management', component: RoomManagementComponent},
      {path:'employee-management', component: EmployeeManagementComponent},
      {path:'payments', component: PaymentsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
