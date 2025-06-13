import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisaConfigurationModule } from './visa-configuration/visa-configuration.module';
import { VisaConfigurationFileModule } from './visa-configuration-file/visa-configuration-file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';

@Module({
  imports: [VisaConfigurationModule, VisaConfigurationFileModule , TypeOrmModule.forRoot(pgConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
