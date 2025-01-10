import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { CardFormComponent } from './app/components/card-form/card-form.component';
import {provideRouter} from "@angular/router";
//import {CarouselComponent} from "./app/components/carousel/carousel.component";

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter([
      {
        path: '', children: [
          {path: '', component: HomeComponent},
          {path: 'about', component: AboutComponent},
          {path: 'contact', component: ContactComponent},
          {path: 'card', component: CardFormComponent}
        ]
      }
    ])
  ]
})