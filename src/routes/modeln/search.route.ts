import { Router } from 'express';
import SearchController from '@controllers/modeln/search.controller';
import Route from '@interfaces/routes.interface';

class SearchRoute implements Route {
  public path = '/modeln/rest/data/:searchName/';
  public router = Router();
  public searchController = new SearchController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}search`, this.searchController.search);
  }
}

export default SearchRoute;
