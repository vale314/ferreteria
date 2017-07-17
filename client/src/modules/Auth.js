class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token,users) {
    if(users === 'ADMIN' )
      return localStorage.setItem('admin', token)
    if(users === 'USER')
      return localStorag.setItem('user',token)
  }



  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */

  static isUserAuthenticated() {
    if(localStorage.getItem('admin') !==null ){

        return ('ADMIN');

    }
    if(localStorage.getItem('user') !== null ){

          return ('USER') ;
    } else {
      return false;
    }

  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static desauthenticateUser() {
    localStorage.removeItem('admin');
    localStorage.removeItem('user');

  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken(users) {
    if(users === 'ADMIN')
      return localStorage.getItem('admin');
    if(users === 'USER')
      return localStorage.getItem('user')
    else
      return false;

  }

}

export default Auth;
