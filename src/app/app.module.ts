import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }  from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
<<<<<<< HEAD

=======
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { ContactComponent } from './about/contact/contact.component';
import { ServicesComponent } from './about/services/services.component';
>>>>>>> 297ff6f264e9ce959319250ad73162d05f37d73d
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    SearchComponent,
    AboutusComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
