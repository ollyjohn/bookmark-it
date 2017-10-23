import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _authService: AuthService) { }

  ngOnInit() {
  }

}
