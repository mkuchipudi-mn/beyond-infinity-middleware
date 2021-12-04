import { Router } from 'express';
import AuthController from '@controllers/modeln/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import Route from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { LoginUserDto } from '@/dtos/login.dto';

class ModelnAuthRoute implements Route {
  public path = '/modeln/rest/authenticate/session/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    console.log("initializeRoutes in modeln");
    this.router.post(`${this.path}login`, validationMiddleware(LoginUserDto, 'body'), this.authController.logIn);
  }
}

export default ModelnAuthRoute;
