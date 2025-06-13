// src/entity/VisaConfigurationFile.ts (Ya aapki file ka naam)
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne, // <--- Isse import karein
  JoinColumn, // <--- Isse import karein (optional magar wazahat ke liye acha)
} from 'typeorm';

import { VisaConfiguration } from 'src/visa-configuration/entities/visa-configuration.entity';

@Entity('global_visa_configuration_files')
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
  @JoinColumn({ name: 'global_visa_configuration_id' })
  visaConfiguration: VisaConfiguration; 
}