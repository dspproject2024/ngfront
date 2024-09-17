import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/content/home/home.component";
import {CategoriesComponent} from "./components/content/categories/categories.component";
import {AdministrateurComponent} from "./components/content/administrateur/administrateur.component";
import {AddAppartComponent} from "./components/content/add-appart/add-appart.component";
import {CguComponent} from "./components/content/cgu/cgu.component";
import {CgvComponent} from "./components/content/cgv/cgv.component";
import {
  ReservationConfirmationComponent
} from "./components/content/reservation/reservation-confirmation/reservation-confirmation.component";
import {MentionLegalesComponent} from "./components/content/mention-legales/mention-legales.component";
import {PrivacyPolicyComponent} from "./components/content/privacy-policy/privacy-policy.component";
import {CookiesPolicyComponent} from "./components/content/cookies-policy/cookies-policy.component";
import {AboutComponent} from "./components/content/about/about.component";
import {LoginComponent} from "./components/content/login/login.component";
import {ViewOwnerAppartComponent} from "./components/content/view-owner-appart/view-owner-appart.component";
import {ContactComponent} from "./components/content/contact/contact.component";
import {RegisterComponent} from "./components/content/register/register.component";
import {DashboardAdminComponent} from "./components/content/dashboard/dashboard-admin/dashboard-admin.component";
import {AppartementsComponent} from "./components/content/appartements/appartements.component";
import {AppartByIdComponent} from "./components/content/appartements/appart-by-id/appart-by-id.component";

let routes: Routes;
routes = [
  {path: '', component: HomeComponent},
  {path: 'cat', component: CategoriesComponent},
  {path: 'admin', component: AdministrateurComponent},
  {path: 'dashboard-admin', component: DashboardAdminComponent},
  {path: 'add-appart', component: AddAppartComponent},
  {path: 'cgu', component: CguComponent},
  {path: 'cgv', component: CgvComponent},
  {path: 'success', component: ReservationConfirmationComponent},
  {path: 'mentions', component: MentionLegalesComponent},
  {path: 'politique', component: PrivacyPolicyComponent},
  {path: 'cookies', component: CookiesPolicyComponent},
    {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'view-owner-appart', component: ViewOwnerAppartComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'list-appart', component: AppartementsComponent},
  { path: 'id-appart/:id', component: AppartByIdComponent },

 // {path: '', redirectTo: '/HomeComponent', pathMatch: 'full'}
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
