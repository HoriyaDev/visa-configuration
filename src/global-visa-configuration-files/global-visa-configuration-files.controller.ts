import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GlobalVisaConfigurationFilesService } from './global-visa-configuration-files.service';
import { CreateGlobalVisaConfigurationFileDto } from './dto/create-global-visa-configuration-file.dto';
import { UpdateGlobalVisaConfigurationFileDto } from './dto/update-global-visa-configuration-file.dto';

@Controller('global-visa-configuration-files')
export class GlobalVisaConfigurationFilesController {
  constructor(private globalVisaConfigurationFilesService: GlobalVisaConfigurationFilesService) {}

  @Post()
  create(@Body() createGlobalVisaConfigurationFileDto: CreateGlobalVisaConfigurationFileDto) {
    return this.globalVisaConfigurationFilesService.create(createGlobalVisaConfigurationFileDto);
  }

  @Get()
  findAll() {
    return this.globalVisaConfigurationFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:number) {
    return this.globalVisaConfigurationFilesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id:number, @Body() updateGlobalVisaConfigurationFileDto: UpdateGlobalVisaConfigurationFileDto) {
    return this.globalVisaConfigurationFilesService.update(id, updateGlobalVisaConfigurationFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.globalVisaConfigurationFilesService.remove(id);
  }
}
