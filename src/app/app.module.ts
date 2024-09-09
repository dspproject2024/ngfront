import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { HomeComponent } from './components/content/home/home.component';
import { HomeHeroComponent } from './components/content/home/home-hero/home-hero.component';
import { HomeTabsComponent } from './components/content/home/home-tabs/home-tabs.component';
import { HomeCategoriesComponent } from './components/content/home/home-categories/home-categories.component';
import { HomeTestimonialsComponent } from './components/content/home/home-testimonials/home-testimonials.component';
import { HomeNewsletterComponent } from './components/content/home/home-newsletter/home-newsletter.component';
import { HomeCookieConsentComponent } from './components/content/home/home-cookie-consent/home-cookie-consent.component';
import { AppartementsComponent } from './components/content/appartements/appartements.component';
import { AppartHeaderComponent } from './components/content/appartements/appart-header/appart-header.component';
import { AppartAppartListComponent } from './components/content/appartements/appart-appart-list/appart-appart-list.component';
import { AppartFilterComponent } from './components/content/appartements/appart-filter/appart-filter.component';
import { AppartStatsComponent } from './components/content/appartements/appart-stats/appart-stats.component';
import { AppartCallToActionComponent } from './components/content/appartements/appart-call-to-action/appart-call-to-action.component';
import { CategoriesComponent } from './components/content/categories/categories.component';
import { CatHeaderComponent } from './components/content/categories/cat-header/cat-header.component';
import { CatListComponent } from './components/content/categories/cat-list/cat-list.component';
import { CatItemComponent } from './components/content/categories/cat-item/cat-item.component';
import { CatMoreCategoriesComponent } from './components/content/categories/cat-more-categories/cat-more-categories.component';
import { AdministrateurComponent } from './components/content/administrateur/administrateur.component';
import { AdminProfileDropdownComponent } from './components/content/administrateur/admin-profile-dropdown/admin-profile-dropdown.component';
import { AdminDashboardHeaderComponent } from './components/content/administrateur/admin-dashboard-header/admin-dashboard-header.component';
import { AdminFeatureSectionComponent } from './components/content/administrateur/admin-feature-section/admin-feature-section.component';
import { AppartAppartItemComponent } from './components/content/appartements/appart-appart-item/appart-appart-item.component';
import { AppartCatListComponent } from './components/content/appartements/appart-cat-list/appart-cat-list.component';
import { AppartCatItemComponent } from './components/content/appartements/appart-cat-item/appart-cat-item.component';
import { AddAppartComponent } from './components/content/add-appart/add-appart.component';
import { AddAppartFormComponent } from './components/content/add-appart/add-appart-form/add-appart-form.component';
import { AddAppartHeaderComponent } from './components/content/add-appart/add-appart-header/add-appart-header.component';
import { AddAppartProfileDropdownComponent } from './components/content/add-appart/add-appart-profile-dropdown/add-appart-profile-dropdown.component';
import { AddAppartNavbarConnectedComponent } from './components/content/add-appart/add-appart-navbar-connected/add-appart-navbar-connected.component';
import { NavbarConnectedComponent } from './components/navbar-connected/navbar-connected.component';
import { CguComponent } from './components/content/cgu/cgu.component';
import { CguContentComponent } from './components/content/cgu/cgu-content/cgu-content.component';
import { CgvComponent } from './components/content/cgv/cgv.component';
import { CgvContentComponent } from './components/content/cgv/cgv-content/cgv-content.component';
import { ReservationConfirmationComponent } from './components/content/reservation/reservation-confirmation/reservation-confirmation.component';
import { ReservationConfirmComponent } from './components/content/reservation/reservation-confirmation/reservation-confirm/reservation-confirm.component';
import { MentionLegalesComponent } from './components/content/mention-legales/mention-legales.component';
import {ContentComponent} from "./components/content/mention-legales/content/content.component";
import { PrivacyPolicyComponent } from './components/content/privacy-policy/privacy-policy.component';
import { PrivacyPolicyContentComponent } from './components/content/privacy-policy/privacy-policy-content/privacy-policy-content.component';
import { CookiesPolicyComponent } from './components/content/cookies-policy/cookies-policy.component';
import { CookiesPolicyContentComponent } from './components/content/cookies-policy/cookies-policy-content/cookies-policy-content.component';
import { AboutComponent } from './components/content/about/about.component';
import { AboutHeaderComponent } from './components/content/about/about-header/about-header.component';
import { AboutHistoryComponent } from './components/content/about/about-history/about-history.component';
import { AboutTeamComponent } from './components/content/about/about-team/about-team.component';
import { LoginComponent } from './components/content/login/login.component';
import { LoginTitleComponent } from './components/content/login/login-title/login-title.component';
import { LoginFormComponent } from './components/content/login/login-form/login-form.component';
import { ViewOwnerAppartComponent } from './components/content/view-owner-appart/view-owner-appart.component';
import { ViewOwnerAppartListComponent } from './components/content/view-owner-appart/view-owner-appart-list/view-owner-appart-list.component';
import { ViewOwnerAppartCardComponent } from './components/content/view-owner-appart/view-owner-appart-card/view-owner-appart-card.component';
import { ViewOwnerAppartNavbarComponent } from './components/content/view-owner-appart/view-owner-appart-navbar/view-owner-appart-navbar.component';
import { ViewOwnerAppartProfileMenuComponent } from './components/content/view-owner-appart/view-owner-appart-profile-menu/view-owner-appart-profile-menu.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { ContactFormComponent } from './components/content/contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './components/content/contact/contact-info/contact-info.component';
import { ContactGoogleMapComponent } from './components/content/contact/contact-google-map/contact-google-map.component';
import { ContactHeaderComponent } from './components/content/contact/contact-header/contact-header.component';
import { AppartDetailsComponent } from './components/content/appart-details/appart-details.component';
import { AppartDetailsContentComponent } from './components/content/appart-details/appart-details-content/appart-details-content.component';
import { AppartDetailsContactComponent } from './components/content/appart-details/appart-details-contact/appart-details-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarMainComponent,
    FooterMainComponent,
    HomeComponent,
    HomeHeroComponent,
    HomeTabsComponent,
    HomeCategoriesComponent,
    HomeTestimonialsComponent,
    HomeNewsletterComponent,
    HomeCookieConsentComponent,
    AppartementsComponent,
    AppartHeaderComponent,
    AppartAppartListComponent,
    AppartFilterComponent,
    AppartStatsComponent,
    AppartCallToActionComponent,
    CategoriesComponent,
    CatHeaderComponent,
    CatListComponent,
    CatItemComponent,
    CatMoreCategoriesComponent,
    AdministrateurComponent,
    AdminProfileDropdownComponent,
    AdminDashboardHeaderComponent,
    AdminFeatureSectionComponent,
    AppartAppartItemComponent,
    AppartCatListComponent,
    AppartCatItemComponent,
    AddAppartComponent,
    AddAppartFormComponent,
    AddAppartHeaderComponent,
    AddAppartProfileDropdownComponent,
    AddAppartNavbarConnectedComponent,
    NavbarConnectedComponent,
    CguComponent,
    CguContentComponent,
    CgvComponent,
    CgvContentComponent,
    ReservationConfirmationComponent,
    ReservationConfirmComponent,
    MentionLegalesComponent,
    ContentComponent,
    PrivacyPolicyComponent,
    PrivacyPolicyContentComponent,
    CookiesPolicyComponent,
    CookiesPolicyContentComponent,
    AboutComponent,
    AboutHeaderComponent,
    AboutHistoryComponent,
    AboutTeamComponent,
    LoginComponent,
    LoginTitleComponent,
    LoginFormComponent,
    ViewOwnerAppartComponent,
    ViewOwnerAppartListComponent,
    ViewOwnerAppartCardComponent,
    ViewOwnerAppartNavbarComponent,
    ViewOwnerAppartProfileMenuComponent,
    ContactComponent,
    ContactFormComponent,
    ContactInfoComponent,
    ContactGoogleMapComponent,
    ContactHeaderComponent,
    AppartDetailsComponent,
    AppartDetailsContentComponent,
    AppartDetailsContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
