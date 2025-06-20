import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateVisaConfigurationDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  agent_id: number;

  @IsNumber()
  destination_country_id: number;

  @IsNumber()
  entry_id: number;

  @IsNumber()
  type_id: number;

  @IsNumber()
  stay_duration_id: number;

  @IsNumber()
  validity_value: number;

  @IsString()
  validity_unit: string;

  @IsNumber()
  processing_priority_ids: number;

  @IsNumber()
  price_structure: number;

  @IsString()
  document_requirements: string;

  @IsString()
  eligibility_criteria: string;

  @IsBoolean()
  is_all_residency: boolean;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
