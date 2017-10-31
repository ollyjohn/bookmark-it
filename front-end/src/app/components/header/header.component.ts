import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';

import { User } from '../../models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public user: User = {} as User;

    constructor( private _authService: AuthService, private _userService: UserService) { }

    ngOnInit() {
        this.user = this._userService.fetchUser();
    }

}
