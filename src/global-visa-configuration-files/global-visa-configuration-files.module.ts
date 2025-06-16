import { Module } from '@nestjs/common';
import { GlobalVisaConfigurationFilesService } from './global-visa-configuration-files.service';
import { GlobalVisaConfigurationFilesController } from './global-visa-configuration-files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalVisaConfigurationFile } from './entities/global-visa-configuration-file.entity';

@Module({
  controllers: [GlobalVisaConfigurationFilesController],
  providers: [GlobalVisaConfigurationFilesService],
  imports: [TypeOrmModule.forFeature([GlobalVisaConfigurationFile])]
})
export class GlobalVisaConfigurationFilesModule {}
