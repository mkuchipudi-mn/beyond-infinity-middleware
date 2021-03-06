import { Router } from 'express';
import NotificationController from '@controllers/modeln/notif.controller';
import Route from '@interfaces/routes.interface';

class NotificationRoute implements Route {
  public path = '/modeln/rest/data/NotifMsg/';
  public router = Router();
  public notificationController = new NotificationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    console.log("initializeRoutes in modeln");
    this.router.post(`${this.path}search`, this.notificationController.search);
    this.router.put(`${this.path}`, this.notificationController.unread);
  }
}

export default NotificationRoute;
