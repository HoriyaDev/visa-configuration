import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVisaConfigurationFileDto } from './dto/create-visa-configuration-file.dto';
import { UpdateVisaConfigurationFileDto } from './dto/update-visa-configuration-file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisaConfigurationFile } from './entities/visa-configuration-file.entity';
import { GlobalVisaConfiguration } from 'src/global-visa-configuration/entities/global-visa-configuration.entity';

@Injectable()
export class VisaConfigurationFileService {
  constructor(
    @InjectRepository(VisaConfigurationFile)
    private visaConfigFileRepo: Repository<VisaConfigurationFile>,

    @InjectRepository(GlobalVisaConfiguration)
    private globalVisaConfigRepo: Repository<GlobalVisaConfiguration>,
  ) {}

  async create(createVisaConfigurationFileDto: CreateVisaConfigurationFileDto) {
    return await this.visaConfigFileRepo.save(createVisaConfigurationFileDto);
  }

  async findAll() {
    return await this.visaConfigFileRepo.find();
  }

  async findOne(id: number) {
    return this.visaConfigFileRepo.findOne({ where: { id } });
  }

  async update(id: number, updateVisaConfigurationFileDto: UpdateVisaConfigurationFileDto) {
    return await this.visaConfigFileRepo.update({ id }, updateVisaConfigurationFileDto);
  }

  async remove(id: number) {
    return this.visaConfigFileRepo.delete({ id });
  }
}
