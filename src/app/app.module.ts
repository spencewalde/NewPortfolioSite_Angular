import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { NavBarComponent } from './resume/nav-bar/nav-bar.component';
import { LandingComponent } from './resume/pages/landing/landing.component';
import { ExperienceComponent } from './resume/pages/experience/experience.component';
import { EducationComponent } from './resume/pages/education/education.component';
import { SkillsComponent } from './resume/pages/skills/skills.component';
import { CertificationsComponent } from './resume/pages/certifications/certifications.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutmeComponent } from './resume/pages/aboutme/aboutme.component';
import { ImageCarouselComponent } from './shared/image-carousel/image-carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactMeComponent,
    NavBarComponent,
    LandingComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    CertificationsComponent,
    AboutmeComponent,
    ImageCarouselComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
