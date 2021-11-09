import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContextComponent } from './components/auth-context/auth-context.component';
import { LoginPageComponent } from './components/auth-context/inner-items/login-page/login-page.component';
import { SignUpPageComponent } from './components/auth-context/inner-items/sign-up-page/sign-up-page.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { TopBarComponent } from './components/dash-board/items/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { GuestContextComponent } from './components/dash-board/components/guest-context/guest-context.component';
import { FrontPageComponent } from './components/dash-board/components/front-page/front-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import { RegisterGuestPageComponent } from './components/dash-board/components/guest-context/register-guest-page/register-guest-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatLineModule, MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateGuestPageComponent } from './components/dash-board/components/guest-context/update-guest-page/update-guest-page.component';
import { DeleteGuestPageComponent } from './components/dash-board/components/guest-context/delete-guest-page/delete-guest-page.component';
import { SearchGuestPageComponent } from './components/dash-board/components/guest-context/search-guest-page/search-guest-page.component';
import { AllGuestsPageComponent } from './components/dash-board/components/guest-context/all-guests-page/all-guests-page.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatRadioModule} from "@angular/material/radio";
import {HttpClientModule} from "@angular/common/http";
import {MatSortModule} from "@angular/material/sort";
import { ReservationsComponent } from './components/dash-board/components/reservations/reservations.component';
import { RoomManagementComponent } from './components/dash-board/components/room-management/room-management.component';
import { EmployeeManagementComponent } from './components/dash-board/components/employee-management/employee-management.component';
import { PaymentsComponent } from './components/dash-board/components/payments/payments.component';
import { NewReservationPageComponent } from './components/dash-board/components/reservations/new-reservation-page/new-reservation-page.component';
import { UpdateReservationPageComponent } from './components/dash-board/components/reservations/update-reservation-page/update-reservation-page.component';
import { CancelReservationPageComponent } from './components/dash-board/components/reservations/cancel-reservation-page/cancel-reservation-page.component';
import { SearchReservationPageComponent } from './components/dash-board/components/reservations/search-reservation-page/search-reservation-page.component';
import { AllReservationsPageComponent } from './components/dash-board/components/reservations/all-reservations-page/all-reservations-page.component';
import { AddRoomPageComponent } from './components/dash-board/components/room-management/add-room-page/add-room-page.component';
import { UpdateRoomPageComponent } from './components/dash-board/components/room-management/update-room-page/update-room-page.component';
import { SearchRoomPageComponent } from './components/dash-board/components/room-management/search-room-page/search-room-page.component';
import { ViewRoomDetailsPageComponent } from './components/dash-board/components/room-management/view-room-details-page/view-room-details-page.component';
import { RemoveRoomPageComponent } from './components/dash-board/components/room-management/remove-room-page/remove-room-page.component';
import { SaveEmployeePageComponent } from './components/dash-board/components/employee-management/save-employee-page/save-employee-page.component';
import { UpdateEmployeePageComponent } from './components/dash-board/components/employee-management/update-employee-page/update-employee-page.component';
import { DeleteEmployeePageComponent } from './components/dash-board/components/employee-management/delete-employee-page/delete-employee-page.component';
import { SearchEmployeePageComponent } from './components/dash-board/components/employee-management/search-employee-page/search-employee-page.component';
import { ShowAllEmployeesPageComponent } from './components/dash-board/components/employee-management/show-all-employees-page/show-all-employees-page.component';
import { NewPaymentPageComponent } from './components/dash-board/components/payments/new-payment-page/new-payment-page.component';
import { ShowPaymentDetailsPageComponent } from './components/dash-board/components/payments/show-payment-details-page/show-payment-details-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthContextComponent,
    LoginPageComponent,
    SignUpPageComponent,
    DashBoardComponent,
    TopBarComponent,
    GuestContextComponent,
    FrontPageComponent,
    RegisterGuestPageComponent,
    UpdateGuestPageComponent,
    DeleteGuestPageComponent,
    SearchGuestPageComponent,
    AllGuestsPageComponent,
    ReservationsComponent,
    RoomManagementComponent,
    EmployeeManagementComponent,
    PaymentsComponent,
    NewReservationPageComponent,
    UpdateReservationPageComponent,
    CancelReservationPageComponent,
    SearchReservationPageComponent,
    AllReservationsPageComponent,
    AddRoomPageComponent,
    UpdateRoomPageComponent,
    SearchRoomPageComponent,
    ViewRoomDetailsPageComponent,
    RemoveRoomPageComponent,
    SaveEmployeePageComponent,
    UpdateEmployeePageComponent,
    DeleteEmployeePageComponent,
    SearchEmployeePageComponent,
    ShowAllEmployeesPageComponent,
    NewPaymentPageComponent,
    ShowPaymentDetailsPageComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        FormsModule,
        MatPaginatorModule,
        MatRadioModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSortModule,
        MatNativeDateModule,
        MatLineModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
