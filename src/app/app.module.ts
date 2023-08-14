import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { OscarComponent } from './components/oscar/oscar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionComponent } from './components/action/action.component';
import { DramaComponent } from './components/drama/drama.component';
import { SciFiComponent } from './components/sci-fi/sci-fi.component';
import { RomanceComponent } from './components/romance/romance.component';
import { ThrillerComponent } from './components/thriller/thriller.component';
import { CrimeComponent } from './components/crime/crime.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionSComponent } from './components/action-s/action-s.component';
import { ComedySComponent } from './components/comedy-s/comedy-s.component';
import { CrimeSComponent } from './components/crime-s/crime-s.component';
import { DramaSComponent } from './components/drama-s/drama-s.component';
import { OscarSComponent } from './components/oscar-s/oscar-s.component';
import { RomanceSComponent } from './components/romance-s/romance-s.component';
import { SciFiSComponent } from './components/sci-fi-s/sci-fi-s.component';
import { ThrillerSComponent } from './components/thriller-s/thriller-s.component';
import { StoreServiceService } from './Services/store-service.service';
import { CategoryService } from './Services/category.service';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { HttpService } from './Services/http.service';
import { ViewReviewComponent } from './components/view-review/view-review.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { AllhitComponent } from './components/allhit/allhit.component';
import { AllhitSComponent } from './components/allhit-s/allhit-s.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OscarComponent,
    ActionComponent,
    DramaComponent,
    SciFiComponent,
    RomanceComponent,
    ThrillerComponent,
    CrimeComponent,
    ComedyComponent,
    ActionSComponent,
    ComedySComponent,
    CrimeSComponent,
    DramaSComponent,
    OscarSComponent,
    RomanceSComponent,
    SciFiSComponent,
    ThrillerSComponent,
    AddReviewComponent,
    ViewReviewComponent,
    AllhitComponent,
    AllhitSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
  ],
  providers: [HttpService,StoreServiceService,CategoryService,provideAnimations(),
  provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
