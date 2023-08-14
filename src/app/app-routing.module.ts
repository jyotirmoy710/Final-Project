import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OscarComponent } from './components/oscar/oscar.component';
import { RomanceComponent } from './components/romance/romance.component';
import { ActionComponent } from './components/action/action.component';
import { SciFiComponent } from './components/sci-fi/sci-fi.component';
import { DramaComponent } from './components/drama/drama.component';
import { ThrillerComponent } from './components/thriller/thriller.component';
import { CrimeComponent } from './components/crime/crime.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { ActionSComponent } from './components/action-s/action-s.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { authGuard } from './auth.guard';
import { ViewReviewComponent } from './components/view-review/view-review.component';
import { ComedySComponent } from './components/comedy-s/comedy-s.component';
import { DramaSComponent } from './components/drama-s/drama-s.component';
import { SciFiSComponent } from './components/sci-fi-s/sci-fi-s.component';
import { RomanceSComponent } from './components/romance-s/romance-s.component';
import { ThrillerSComponent } from './components/thriller-s/thriller-s.component';
import { CrimeSComponent } from './components/crime-s/crime-s.component';
import { OscarSComponent } from './components/oscar-s/oscar-s.component';
import { AllhitComponent } from './components/allhit/allhit.component';
import { AllhitSComponent } from './components/allhit-s/allhit-s.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "oscar", component: OscarComponent },
  { path: "oscar/oscar-s/:id", component: OscarSComponent },
  { path: "allhit", component: AllhitComponent},
  { path: "allhit/allhit-s/:id", component: AllhitSComponent },
  { path: "action", component: ActionComponent},
  { path: "action/action-s/:id", component: ActionSComponent },
  { path: "drama", component: DramaComponent },
  { path: "drama/drama-s/:id", component: DramaSComponent },
  { path: "sci_fi", component: SciFiComponent },
  { path: "sci_fi/sci_fi-s/:id", component: SciFiSComponent },
  { path: "romance", component: RomanceComponent },
  { path: "romance/romance-s/:id", component: RomanceSComponent },
  { path: "thriller", component: ThrillerComponent },
  { path: "thriller/thriller-s/:id", component: ThrillerSComponent },
  { path: "crime", component: CrimeComponent },
  { path: "crime/crime-s/:id", component: CrimeSComponent },
  { path: "comedy", component: ComedyComponent },
  { path: "comedy/comedy-s/:id", component: ComedySComponent },
  { path: "addreview", component: AddReviewComponent, canActivate: [authGuard] },
  { path: "viewreview/:movie", component: ViewReviewComponent, canActivate: [authGuard] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
