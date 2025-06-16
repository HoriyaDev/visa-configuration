import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GlobalVisaConfigurationService } from './global-visa-configuration.service';
import { CreateGlobalVisaConfigurationDto } from './dto/create-global-visa-configuration.dto';
import { UpdateGlobalVisaConfigurationDto } from './dto/update-global-visa-configuration.dto';

@Controller('global-visa-configuration')
export class GlobalVisaConfigurationController {
  constructor(private  globalVisaConfigurationService: GlobalVisaConfigurationService) {}

  @Post()
  create(@Body() createGlobalVisaConfigurationDto: CreateGlobalVisaConfigurationDto) {
    return this.globalVisaConfigurationService.create(createGlobalVisaConfigurationDto);
  }

  @Get()
  findAll() {
    return this.globalVisaConfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:number) {
    return this.globalVisaConfigurationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGlobalVisaConfigurationDto: UpdateGlobalVisaConfigurationDto) {
    return this.globalVisaConfigurationService.update(id, updateGlobalVisaConfigurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.globalVisaConfigurationService.remove(id);
  }
}
