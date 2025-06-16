import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VisaConfiguration } from './entities/visa-configuration.entity';
import { VisaConfigurationFile } from 'src/visa-configuration-file/entities/visa-configuration-file.entity';
import { GlobalVisaConfiguration } from 'src/global-visa-configuration/entities/global-visa-configuration.entity';
import { GlobalVisaConfigurationFile } from 'src/global-visa-configuration-files/entities/global-visa-configuration-file.entity';

import { CreateVisaConfigurationDto } from './dto/create-visa-configuration.dto';
import { UpdateVisaConfigurationDto } from './dto/update-visa-configuration.dto';

@Injectable()
export class VisaConfigurationService {
  constructor(
    @InjectRepository(VisaConfiguration)
    private visaConfigRepo: Repository<VisaConfiguration>,

    @InjectRepository(VisaConfigurationFile)
    private visaConfigFilesRepo: Repository<VisaConfigurationFile>,

    @InjectRepository(GlobalVisaConfiguration)
    private globalVisaConfigRepo: Repository<GlobalVisaConfiguration>,

    @InjectRepository(GlobalVisaConfigurationFile)
    private globalVisaConfigFilesRepo: Repository<GlobalVisaConfigurationFile>,
  ) {}

  async create(createVisaConfigurationDto: CreateVisaConfigurationDto) {
    return await this.visaConfigRepo.save(createVisaConfigurationDto);
  }

  async importFromGlobal(agentId: number) {
    const globalVisa = await this.globalVisaConfigRepo.findOne({
      where: { id: agentId },
      relations: ['files'],
    });

    if (!globalVisa) {
      throw new NotFoundException('Not Found');
    }

    // Remove unwanted fields
    const { id, created_at, updated_at, deleted_at, files, ...rest } = globalVisa;

    // Create new visa config based on global data
    const visa = this.visaConfigRepo.create({
      ...rest,
      agent_id: agentId,
      is_active: true,
    });

    const savedVisa = await this.visaConfigRepo.save(visa);

    // Copy attached files if present
    if (files && files.length > 0) {
      const visaFiles = files.map(file => {
        return this.visaConfigFilesRepo.create({
          file_name: file.file_name,
          file_url: file.file_url,
          file_type: file.file_type,
          display_name: file.display_name,
          is_active: true,
          visaConfiguration: savedVisa, // establish relation
        });
      });

      await this.visaConfigFilesRepo.save(visaFiles);
    }

    // Return saved visa with files
    return this.visaConfigRepo.findOne({
      where: { id: savedVisa.id },
      relations: ['files'],
    });
  }

  async findAll() {
    return await this.visaConfigRepo.find({ relations: ['files'] });
  }

  async findOne(id: number) {
    return this.visaConfigRepo.findOne({
      where: { id },
      relations: ['files'],
    });
  }

  async update(id: number, updateVisaConfigurationDto: UpdateVisaConfigurationDto) {
    return await this.visaConfigRepo.update({ id }, updateVisaConfigurationDto);
  }

  async remove(id: number) {
    return await this.visaConfigRepo.delete({ id });
  }
}
