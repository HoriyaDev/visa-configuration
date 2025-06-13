import { PartialType } from '@nestjs/mapped-types';
import { CreateVisaConfigurationFileDto } from './create-visa-configuration-file.dto';

export class UpdateVisaConfigurationFileDto extends PartialType(CreateVisaConfigurationFileDto) {}
