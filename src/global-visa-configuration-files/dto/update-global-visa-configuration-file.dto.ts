import { PartialType } from '@nestjs/mapped-types';
import { CreateGlobalVisaConfigurationFileDto } from './create-global-visa-configuration-file.dto';

export class UpdateGlobalVisaConfigurationFileDto extends PartialType(CreateGlobalVisaConfigurationFileDto) {}
