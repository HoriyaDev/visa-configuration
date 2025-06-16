import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisaConfigurationModule } from './visa-configuration/visa-configuration.module';
import { VisaConfigurationFileModule } from './visa-configuration-file/visa-configuration-file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { GlobalVisaConfigurationModule } from './global-visa-configuration/global-visa-configuration.module';
import { GlobalVisaConfigurationFilesModule } from './global-visa-configuration-files/global-visa-configuration-files.module';

@Module({
  imports: [VisaConfigurationModule, VisaConfigurationFileModule , TypeOrmModule.forRoot(pgConfig), GlobalVisaConfigurationModule, GlobalVisaConfigurationFilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
