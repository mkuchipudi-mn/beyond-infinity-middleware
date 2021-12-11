import { Request, Response } from 'express';

import cookieService from './cookie.service';
import SearchService from './search.service';

class ClaimServiceService {
  public searchService = new SearchService();

  constructor() {}

  public async fetchDetails(req: Request, res: Response): Promise<any> {
    const { body } = req;
    const id = req.params.id
    const cookie = cookieService.getCookie();
    return await this.searchService.search(cookie, `data/DistRebatesClaim/${id}`, body);
  }

}


export default ClaimServiceService;