import { Module } from '@nestjs/common';
import { VisaConfigurationService } from './visa-configuration.service';
import { VisaConfigurationController } from './visa-configuration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisaConfiguration } from './entities/visa-configuration.entity';

@Module({
  controllers: [VisaConfigurationController],
  providers: [VisaConfigurationService],
  imports:[TypeOrmModule.forFeature([VisaConfiguration])]
})
export class VisaConfigurationModule {}
