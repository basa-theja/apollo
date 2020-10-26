import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { StepperComponent } from './stepper/stepper.component';
import { Pay_off_student_loanComponent } from './Pay_off_student_loan/Pay_off_student_loan.component';
import { LoanComponent } from './loan/loan.component';
import { GoalsComponent } from './goals/goals.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { AccountsComponent } from './accounts/accounts.component';
import { ProfileComponent } from './profile/profile.component';
import { GetCashComponent } from './get-cash/get-cash.component';
import { AddCashComponent } from './add-cash/add-cash.component';
import { ActivityComponent } from './activity/activity.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainDashboardComponent,
    DashboardComponent,
    OnboardingComponent,
    StepperComponent,
    LoanComponent,
    GoalsComponent,
    Pay_off_student_loanComponent,
    AccountsComponent,
    ProfileComponent,
    GetCashComponent,
    AddCashComponent,
    ActivityComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
