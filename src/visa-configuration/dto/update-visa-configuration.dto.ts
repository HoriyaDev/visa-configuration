import { PartialType } from '@nestjs/mapped-types';
import { CreateVisaConfigurationDto } from './create-visa-configuration.dto';

export class UpdateVisaConfigurationDto extends PartialType(CreateVisaConfigurationDto) {}
