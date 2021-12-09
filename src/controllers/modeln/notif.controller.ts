import { NextFunction, Request, Response } from 'express';

import NotificationService from '@services/modeln/notification.service';
import { LoginUserDto } from '@/dtos/login.dto';

class NotificationController {
  public notificationService = new NotificationService();


  public search = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: LoginUserDto = req.body;
      const response = await this.notificationService.search(req,res);

      //res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };


  public unread = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response = await this.notificationService.unread(req,res);

      //res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

}

export default NotificationController;
