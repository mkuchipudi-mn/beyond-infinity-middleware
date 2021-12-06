import { Request, Response } from 'express';


import getAuth from '@/auth/auth';
import cookieService from './cookie.service';
import SearchService from './search.service';
import searchRequest from '../../mock/indirectsearch.json';



class NotificationService {

  public searchService = new SearchService();

  constructor() {}

  public async search(req: Request, res: Response): Promise<any> {
    const { body } = req;
    const cookie = cookieService.getCookie();
    console.log(cookie)
    return await this.searchService.search(cookie, body);
  }
}


export default NotificationService;