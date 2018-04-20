import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { MessageService } from './services/message.service';
import { ImageService } from './services/image.service';
import { GalaryComponent } from './components/galary/galary.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    GalaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-portfolio'),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    MessageService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
