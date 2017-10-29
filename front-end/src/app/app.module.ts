// MODULES
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

// COMPONENTS
import { AppComponent }  from './components/app/app.component';
import { BookmarkComponent } from './bookmark.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';

// SERVICES
import { AuthService } from './services/auth/auth.service';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];

@NgModule( {
    declarations: [
        AppComponent,
        BookmarkComponent,
        LoginComponent,
        LandingComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot( routes )
    ],
    providers: [
        AuthService
    ],
    bootstrap: [
        AppComponent
    ]
} )
export class AppModule { }
