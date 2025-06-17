import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGlobalVisaConfigurationDto } from './dto/create-global-visa-configuration.dto';
import { UpdateGlobalVisaConfigurationDto } from './dto/update-global-visa-configuration.dto';
import { GlobalVisaConfiguration } from './entities/global-visa-configuration.entity';
// import { HttpService } from '@nestjs/axios';
// import { ConfigService } from 'node_modules/@nestjs/config';
@Injectable()
export class GlobalVisaConfigurationService {

  constructor(
      @InjectRepository(GlobalVisaConfiguration)
      private globalVisaConfigRepo: Repository<GlobalVisaConfiguration>, 
      // private httpService:HttpService,
      // // private configService:ConfigService

    ) {}
  async create(createGlobalVisaConfigurationDto: CreateGlobalVisaConfigurationDto) {
    return await this.globalVisaConfigRepo.save(createGlobalVisaConfigurationDto);
  }

 async findAll() {
    return  await this.globalVisaConfigRepo.find({
      relations:['files']
    });
  }

  async findOne(id: number) {
    return await this.globalVisaConfigRepo.findOne({
       where: { id },
    relations: ['files'], 
    });
  }

 async update(id: number, updateGlobalVisaConfigurationDto: UpdateGlobalVisaConfigurationDto) {
    return await this.globalVisaConfigRepo.update({id}, updateGlobalVisaConfigurationDto);
  }

 async remove(id: number) {
    return await this.globalVisaConfigRepo.delete({id});
  }
}
