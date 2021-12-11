import { Router } from 'express';
import ApprovalController from '@controllers/modeln/approval.controller';
import Route from '@interfaces/routes.interface';

class AprovalRoute implements Route {
  public path = '/modeln/rest/approval';
  public router = Router();
  public approvalController = new ApprovalController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    console.log("initializeRoutes in modeln");
    this.router.post(`${this.path}/:id`, this.approvalController.action);
  }
}

export default AprovalRoute;
