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
import { BookmarkService } from './services/bookmark/bookmark.service';
import { UserService } from './services/user/user.service';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, },
    { path: 'bookmarks', component: ListComponent, canActivate: [ AuthGuard ] },
];

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent,
        ListComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot( routes )
    ],
    providers: [
        AuthService,
        BookmarkService,
        UserService,
        JwtHelper,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ]
} )
export class AppModule { }
