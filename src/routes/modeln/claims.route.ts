import { Router } from 'express';
import ClaimController from '@controllers/modeln/claim.controller';
import Route from '@interfaces/routes.interface';

class ClaimRoute implements Route {
  public path = '/modeln/rest/data/DistRebatesClaim';
  public router = Router();
  public claimController = new ClaimController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    console.log("initializeRoutes in modeln");
    this.router.post(`${this.path}/:id`, this.claimController.fetchDetails);
  }
}

export default ClaimRoute;
