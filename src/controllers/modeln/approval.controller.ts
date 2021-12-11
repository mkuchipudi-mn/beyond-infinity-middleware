import { NextFunction, Request, Response } from 'express';

import ApprovalServiceService from '@services/modeln/approval.service';

class ApprovalController {
  public approvalServiceService = new ApprovalServiceService();
  public action = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response = await this.approvalServiceService.action(req,res);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}

export default ApprovalController;
