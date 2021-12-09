import { Request, Response } from 'express';


import getAuth from '@/auth/auth';
import cookieService from './cookie.service';
import SearchService from './search.service';


class NotificationService {

  public searchService = new SearchService();

  constructor() {}

  public async search(req: Request, res: Response): Promise<any> {
    const { body } = req;
    const cookie = cookieService.getCookie();
    return await this.searchService.search(cookie, 'data/NotifMsg/search', body);
  }

  public async unread(req: Request, res: Response): Promise<any> {
    const { body } = req;
    const cookie = cookieService.getCookie();
    return await this.searchService.updateAction(cookie, 'data/NotifMsg', body);
  }
}


export default NotificationService;