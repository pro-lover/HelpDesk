import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { ContactComponent } from './about/contact/contact.component';
import { ServicesComponent } from './about/services/services.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'registration',
    component: RegistrationComponent
  }
  ,
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
