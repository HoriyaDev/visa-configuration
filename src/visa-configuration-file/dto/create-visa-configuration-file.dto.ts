import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateVisaConfigurationFileDto {
  @IsString()
  file_name: string;

  @IsString()
  file_url: string;

  @IsString()
  file_type: string;

  @IsString()
  display_name: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsNumber()
  global_visa_configuration_id: number;
}
