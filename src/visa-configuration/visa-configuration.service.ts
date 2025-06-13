import { Injectable } from '@nestjs/common';
import { CreateVisaConfigurationDto } from './dto/create-visa-configuration.dto';
import { UpdateVisaConfigurationDto } from './dto/update-visa-configuration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VisaConfiguration } from './entities/visa-configuration.entity';
@Injectable()
export class VisaConfigurationService {
  constructor(
    @InjectRepository(VisaConfiguration)
    private visaConfigRepo: Repository<VisaConfiguration>,
  ) {}
  async create(createVisaConfigurationDto: CreateVisaConfigurationDto) {
    return await this.visaConfigRepo.save(createVisaConfigurationDto);
  }

  async findAll() {
    return await this.visaConfigRepo.find();
  }

  async findOne(id: number) {
  return this.visaConfigRepo.findOne({
    where: { id },
    relations: ['files'], 
  });
}

  async update(
    id: number,
    updateVisaConfigurationDto: UpdateVisaConfigurationDto,
  ) {
    return await this.visaConfigRepo.update({ id }, updateVisaConfigurationDto);
  }

  async remove(id: number) {


   return await this.visaConfigRepo.delete({id})
  }
}
