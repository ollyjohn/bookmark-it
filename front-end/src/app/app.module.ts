import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, Routes, RouterStateSnapshot } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { JwtHelper } from 'angular2-jwt';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';

import { AuthService } from './services/auth/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { CreateBookmarkComponent } from './components/create-bookmark/create-bookmark.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, },
    { path: 'bookmarks', component: ListComponent, canActivate: [ AuthGuard ] },
    { path: 'bookmarks/create', component: CreateBookmarkComponent, canActivate: [ AuthGuard ] }
];

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent,
        ListComponent,
        HeaderComponent,
        CreateBookmarkComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot( routes )
    ],
    providers: [
        AuthService,
        JwtHelper,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ]
} )
export class AppModule { }
