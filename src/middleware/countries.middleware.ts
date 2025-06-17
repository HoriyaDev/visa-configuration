import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

@Injectable()
export class CountryCheckMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const isEnabled = process.env.COUNTRIES_SERVICE_ENABLED === 'true';
    const country_url = process.env.COUNTRIES_API_URL;

    if (
      isEnabled &&
     
      req.originalUrl.includes('/visa-configuration/countries')
    ) {
      if (!country_url) {
        return res.status(500).json({
          message: 'COUNTRIES_API_URL is not defined in the environment file',
        });
      }

      try {
        const response = await axios.get(country_url);
        return res.json(response.data);
      } catch (error) {
        return res.status(500).json({
          message: 'Failed to fetch countries from service',
          error: error.message,
        });
      }
    }

    next(); // only if not handled above
  }
}
