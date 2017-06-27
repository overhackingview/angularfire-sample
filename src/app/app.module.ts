import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

///// Start FireStarter
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';


// FireStarter Users
import { AuthService } from './core/auth.service';
import { AuthGuard} from './core/auth.guard';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserFormComponent } from './users/user-form/user-form.component';



// FireStarter Items
import { ItemService } from './items/shared/item.service';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';

// FireStarter Uploads
import { UploadService } from './uploads/shared/upload.service';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { UploadsListComponent } from './uploads/uploads-list/uploads-list.component';
import { UploadDetailComponent } from './uploads/upload-detail/upload-detail.component';

// FireStarter Navigation
import { NavService } from './ui/shared/nav.service';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { FooterNavComponent } from './ui/footer-nav/footer-nav.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ReadmePageComponent } from './ui/readme-page/readme-page.component';
import { ItemsDetailComponent } from './items/items-detail/items-detail.component';
import { ItemsFormComponent } from './items/items-form/items-form.component';


export const firebaseConfig = environment.firebaseConfig;

///// End FireStarter


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserProfileComponent,
    ItemsListComponent,
    ItemFormComponent,
    ItemDetailComponent,
    UploadFormComponent,
    UploadsListComponent,
    UploadDetailComponent,
    TopNavComponent,
    FooterNavComponent,
    UserFormComponent,
    LoadingSpinnerComponent,
    ReadmePageComponent,
    ItemsDetailComponent,
    ItemsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ItemService,
    UploadService,
    NavService,

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
