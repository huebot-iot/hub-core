import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { NetworkModule } from './network/network.module';

@Module({
  imports: [ConfigModule, NetworkModule],
})
export class AppModule {}
