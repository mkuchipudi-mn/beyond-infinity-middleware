import { Request, Response } from 'express';

import getAuth from '@/auth/auth';
import cookieService from './cookie.service';

class AuthService {

  constructor() {}

  public async login(req: Request, res: Response): Promise<any> {
    const { body } = req;
    const response = await getAuth(body);
    const cookie = response.headers.raw()["set-cookie"];
    cookieService.setCookie(cookie);
    const data = await response.json();
    return data;
  }
}


export default AuthService;