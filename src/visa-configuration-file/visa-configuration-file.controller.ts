import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisaConfigurationFileService } from './visa-configuration-file.service';
import { CreateVisaConfigurationFileDto } from './dto/create-visa-configuration-file.dto';
import { UpdateVisaConfigurationFileDto } from './dto/update-visa-configuration-file.dto';
import { VisaConfiguration } from '../visa-configuration/entities/visa-configuration.entity';
import { CreateVisaConfigurationDto } from '../visa-configuration/dto/create-visa-configuration.dto';
import { UpdateVisaConfigurationDto } from '../visa-configuration/dto/update-visa-configuration.dto';

@Controller('visa-configuration-file')
export class VisaConfigurationFileController {
  constructor(private readonly visaConfigurationFileService: VisaConfigurationFileService) {}

  @Post()
  create(@Body() createVisaConfigurationFileDto: CreateVisaConfigurationFileDto) {
    return this.visaConfigurationFileService.create(createVisaConfigurationFileDto);
  }

  @Get()
  findAll() {
    return this.visaConfigurationFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.visaConfigurationFileService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVisaConfigurationFileDto: UpdateVisaConfigurationFileDto) {
    return this.visaConfigurationFileService.update(id, updateVisaConfigurationFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.visaConfigurationFileService.remove(id);
  }
}