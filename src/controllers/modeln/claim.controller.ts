import { NextFunction, Request, Response } from 'express';

import ClaimServiceService from '@services/modeln/claim.service';

class ClaimController {
  public claimServiceService = new ClaimServiceService();


  public fetchDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response = await this.claimServiceService.fetchDetails(req,res);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };


}

export default ClaimController;
