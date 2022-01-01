import { NextFunction, Request, Response } from 'express';

import cookieService from '@services/modeln/cookie.service';
import SearchService from '@services/modeln/search.service';

class SearchController {
  public searchService = new SearchService();

  public search = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { body } = req;
      const cookie = cookieService.getCookie();
      const path = `data/${req.params.searchName}/search`;
      console.log(cookie);
      console.log(path);
      const response = await this.searchService.search(cookie, path, body);
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}

export default SearchController;
