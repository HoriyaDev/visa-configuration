import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisaConfigurationModule } from './visa-configuration/visa-configuration.module';
import { VisaConfigurationFileModule } from './visa-configuration-file/visa-configuration-file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { GlobalVisaConfigurationModule } from './global-visa-configuration/global-visa-configuration.module';
import { GlobalVisaConfigurationFilesModule } from './global-visa-configuration-files/global-visa-configuration-files.module';
import { ConfigModule } from '@nestjs/config';
import { CountryCheckMiddleware } from './middleware/countries.middleware';

@Module({
  imports: [VisaConfigurationModule, VisaConfigurationFileModule , TypeOrmModule.forRoot(pgConfig), GlobalVisaConfigurationModule, ConfigModule.forRoot({
    isGlobal: true,
  }),
    GlobalVisaConfigurationFilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {


  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CountryCheckMiddleware).forRoutes('*');
  }
}
