import { Router } from 'express';
import SearchCardController from '@controllers/modeln/searchcard.controller';
import Route from '@interfaces/routes.interface';

class SearchCardsRoute implements Route {
  public path = '/modeln/rest/data/PersistedSearch/';
  public router = Router();
  public searchCardController = new SearchCardController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}search1`, this.searchCardController.searchCards);
  }
}

export default SearchCardsRoute;
