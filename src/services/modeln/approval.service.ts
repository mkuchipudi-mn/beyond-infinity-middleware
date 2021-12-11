import { Request, Response } from 'express';

import cookieService from './cookie.service';
import SearchService from './search.service';

class ApprovalServiceService {
  public searchService = new SearchService();

  constructor() {}

  public async action(req: Request, res: Response): Promise<any> {
    const { body } = req;
    const id = req.params.id
    const cookie = cookieService.getCookie();
    return await this.searchService.search(cookie, `approval/${id}`, body);
  }
}

export default ApprovalServiceService;