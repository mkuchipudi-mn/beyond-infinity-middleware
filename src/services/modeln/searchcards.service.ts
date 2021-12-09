import { Request, Response } from 'express';

import cookieService from './cookie.service';
import SearchService from './search.service';

class SearchCardsService {
  public searchService = new SearchService();

  constructor() {}

  public async searchCards(req: Request, res: Response): Promise<any> {
    const { body } = req;
    const cookie = cookieService.getCookie();
    return await this.searchService.search(cookie, 'data/PersistedSearch/search', body);
  }

}


export default SearchCardsService;