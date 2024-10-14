import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

// Import your custom components
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './shared/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,       // Required for running the app in the browser
    AppRoutingModule     // Your routing configuration
  ],
  providers: [],         // Place any services here if you need global services
  bootstrap: [AppComponent]  // The root component to bootstrap the application
})
export class AppModule { }
