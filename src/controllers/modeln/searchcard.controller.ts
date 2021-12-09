import { NextFunction, Request, Response } from 'express';

import SearchCardsService from '@services/modeln/searchcards.service';

class SearchCardController {
  public searchCardsService = new SearchCardsService();


  public searchCards = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response = await this.searchCardsService.searchCards(req,res);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };


}

export default SearchCardController;
