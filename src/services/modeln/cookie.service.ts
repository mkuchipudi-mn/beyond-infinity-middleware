class CookieService {
  
  private cookie : string = null;
  
  public setCookie(cookie: string): void {
    this.cookie = cookie;
  }

  public getCookie() : string {
    return this.cookie;
  }
}


const cookieService = new CookieService();


export default cookieService;