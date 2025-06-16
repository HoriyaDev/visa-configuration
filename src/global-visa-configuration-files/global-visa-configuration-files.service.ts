import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GlobalVisaConfigurationFile } from './entities/global-visa-configuration-file.entity';

@Injectable()
export class GlobalVisaConfigurationFilesService {
  constructor(
    @InjectRepository(GlobalVisaConfigurationFile)
    private globalVisaConfigFileRepo: Repository<GlobalVisaConfigurationFile>
  ) {}

  async create(createDto: any) {
    return await this.globalVisaConfigFileRepo.save(createDto);
  }

  async findAll() {
    return await this.globalVisaConfigFileRepo.find();
  }

  async findOne(id: number) {
    return await this.globalVisaConfigFileRepo.findOne({ where: { id } });
  }

  async update(id: number, updateDto: any) {
    return await this.globalVisaConfigFileRepo.update({ id }, updateDto);
  }

  async remove(id: number) {
    return await this.globalVisaConfigFileRepo.delete({ id });
  }
} 