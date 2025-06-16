import { PartialType } from '@nestjs/mapped-types';
import { CreateGlobalVisaConfigurationDto } from './create-global-visa-configuration.dto';

export class UpdateGlobalVisaConfigurationDto extends PartialType(CreateGlobalVisaConfigurationDto) {}
