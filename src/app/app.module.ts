import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MultipleComponent } from './multiple/multiple.component';
import { ManagementComponent } from './management/management.component';
import { AboutComponent } from './homepage/about/about.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReportComponent } from './report/report.component';
import { CalenderComponent } from './report/calender/calender.component';
import { FliterComponent } from './report/fliter/fliter.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarrersComponent } from './carrers/carrers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    MultipleComponent,
    ManagementComponent,
    AboutComponent,
    MainpageComponent,
    ReportComponent,
    CalenderComponent,
    FliterComponent,
    AboutUsComponent,
    CarrersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
