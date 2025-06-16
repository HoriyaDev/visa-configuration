import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGlobalVisaConfigurationDto } from './dto/create-global-visa-configuration.dto';
import { UpdateGlobalVisaConfigurationDto } from './dto/update-global-visa-configuration.dto';
import { GlobalVisaConfiguration } from './entities/global-visa-configuration.entity';

@Injectable()
export class GlobalVisaConfigurationService {

  constructor(
      @InjectRepository(GlobalVisaConfiguration)
      private globalVisaConfigRepo: Repository<GlobalVisaConfiguration>
    ) {}
  async create(createGlobalVisaConfigurationDto: CreateGlobalVisaConfigurationDto) {
    return await this.globalVisaConfigRepo.save(createGlobalVisaConfigurationDto);
  }

 async findAll() {
    return  await this.globalVisaConfigRepo.find();
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
