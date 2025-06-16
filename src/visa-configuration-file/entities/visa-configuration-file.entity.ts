
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne, 
  JoinColumn, 
} from 'typeorm';

import { VisaConfiguration } from 'src/visa-configuration/entities/visa-configuration.entity';

@Entity('visa_configuration_files')
export class VisaConfigurationFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_name: string;

  @Column()
  file_url: string;

  @Column()
  file_type: string;

  @Column()
  display_name: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(
    () => VisaConfiguration,
    (visaConfiguration) => visaConfiguration.files
  )
  @JoinColumn({ name: 'visa_configuration_id' })
  visaConfiguration: VisaConfiguration; 




}