import { Module } from '@nestjs/common';
import { VisaConfigurationService } from './visa-configuration.service';
import { VisaConfigurationController } from './visa-configuration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisaConfigurationFile } from 'src/visa-configuration-file/entities/visa-configuration-file.entity';
import { VisaConfiguration } from './entities/visa-configuration.entity';
import { GlobalVisaConfiguration } from 'src/global-visa-configuration/entities/global-visa-configuration.entity';
import {GlobalVisaConfigurationFile} from 'src/global-visa-configuration-files/entities/global-visa-configuration-file.entity'
@Module({
  controllers: [VisaConfigurationController],
  providers: [VisaConfigurationService],
  imports: [TypeOrmModule.forFeature([VisaConfiguration, VisaConfigurationFile,GlobalVisaConfiguration,GlobalVisaConfigurationFile])]
})
export class VisaConfigurationModule {}
