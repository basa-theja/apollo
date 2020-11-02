import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { LoginfirstComponent } from './loginfirst/loginfirst.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { Pay_off_student_loanComponent } from './Pay_off_student_loan/Pay_off_student_loan.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginfirstComponent},
  {path:'home', component:HomeComponent, children:[

  {path:'main', component:MainDashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'onboarding', component:StepperComponent},
  {path:'loan', component:LoanComponent},
  {path:'goals', component:GoalsComponent},
  {path: 'studentLoan', component:Pay_off_student_loanComponent}
  
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
