import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get NODE_ENV() {
    return this.configService.get<string>('NODE_ENV');
  }

  get API_KEY() {
    return this.configService.get<string>('HARNESS_API_KEY');
  }

  get SECRET_KEY() {
    return this.configService.get<string>('HARNESS_SECRET_KEY');
  }

  get NETWORK_NODE_AP_IP() {
    return this.configService.get<string>('NETWORK_NODE_AP_IP');
  }
}
