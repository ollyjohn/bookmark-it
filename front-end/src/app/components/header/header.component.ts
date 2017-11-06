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

    constructor( public _authService: AuthService, public _userService: UserService) { }

    ngOnInit() {
    }

}
