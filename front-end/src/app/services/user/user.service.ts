import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  /**
   * Fetch the user information from localStorage
   */
  public fetchUser = (): { username: string, forename: string, surname: string } => {
      const user = JSON.parse( localStorage.getItem( 'userInfo' ) );
      return {
          username: user.username,
          forename: user.forename,
          surname:  user.surname
      };
  }

  /**
   * Set the userInfo object in localStorage
   * @param {Object} user - what to set
   */
  public setUser = ( user: { username: string, forename: string, surname: string} ): void => {
      localStorage.setItem( 'userInfo', JSON.stringify( user ) );
  }

}
