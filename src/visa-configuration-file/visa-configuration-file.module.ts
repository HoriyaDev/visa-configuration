import { Module } from '@nestjs/common';
import { VisaConfigurationFileService } from './visa-configuration-file.service';
import { VisaConfigurationFileController } from './visa-configuration-file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisaConfigurationFile } from './entities/visa-configuration-file.entity';
import { GlobalVisaConfiguration } from '../global-visa-configuration/entities/global-visa-configuration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisaConfigurationFile, GlobalVisaConfiguration])],
  controllers: [VisaConfigurationFileController],
  providers: [VisaConfigurationFileService],
  exports: [VisaConfigurationFileService]
})
export class VisaConfigurationFileModule {}
