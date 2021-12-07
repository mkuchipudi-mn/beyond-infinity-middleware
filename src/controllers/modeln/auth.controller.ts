import { NextFunction, Request, Response } from 'express';

import AuthService from '@services/modeln/auth.service';
import { LoginUserDto } from '@/dtos/login.dto';

class AuthController {
  public authService = new AuthService();


  
  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: LoginUserDto = req.body;
      const response = await this.authService.login(req,res);

      //res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
