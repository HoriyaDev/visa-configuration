import { Module } from '@nestjs/common';
import { GlobalVisaConfigurationService } from './global-visa-configuration.service';
import { GlobalVisaConfigurationController } from './global-visa-configuration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalVisaConfiguration } from './entities/global-visa-configuration.entity';

@Module({
  controllers: [GlobalVisaConfigurationController],
  providers: [GlobalVisaConfigurationService],
  imports:[TypeOrmModule.forFeature([GlobalVisaConfiguration])]
})
export class GlobalVisaConfigurationModule {}
