import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

//Directives
import { MinDirective } from './home/validators/min-num.validator';
import { MaxDirective } from './home/validators/max-num.validator';

// Bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ng2-tooltip-directive';

// Components
import { DetailComponent } from './home/detail/detail.component';
import { NewComponent } from './home/new/new.component';
import { UserInputComponent } from './home/user-input/user-input.component';

// Services
// import { SitesService } from './home/sites.service';
import { sitesReducer } from './store/sites.reducer';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    NewComponent,
    MinDirective,
    MaxDirective,
    UserInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ sites: sitesReducer }),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    FontAwesomeModule,
    TooltipModule,
    ToastrModule.forRoot(),
  ],
  // providers: [SitesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
