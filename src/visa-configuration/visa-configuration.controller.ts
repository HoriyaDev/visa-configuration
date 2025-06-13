import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisaConfigurationService } from './visa-configuration.service';
import { CreateVisaConfigurationDto } from './dto/create-visa-configuration.dto';
import { UpdateVisaConfigurationDto } from './dto/update-visa-configuration.dto';

@Controller('visa-configuration')
export class VisaConfigurationController {
  constructor(private readonly visaConfigurationService: VisaConfigurationService) {}

  @Post()
  create(@Body() createVisaConfigurationDto: CreateVisaConfigurationDto) {
    return this.visaConfigurationService.create(createVisaConfigurationDto);
  }

  @Get()
  findAll() {
    return this.visaConfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.visaConfigurationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVisaConfigurationDto: UpdateVisaConfigurationDto) {
    return this.visaConfigurationService.update(id, updateVisaConfigurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.visaConfigurationService.remove(id);
  }
}
