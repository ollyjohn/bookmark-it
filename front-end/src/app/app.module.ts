import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';

import { AuthService } from './services/auth/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { AppCompComponent } from './components/app-comp/app-comp.component';
import { AppComponentComponent } from './components/app-component/app-component.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent,
        LandingComponent,
        HeaderComponent,
        AppCompComponent,
        AppComponentComponent
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
