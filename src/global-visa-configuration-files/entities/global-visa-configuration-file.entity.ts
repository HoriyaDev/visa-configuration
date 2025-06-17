import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { GlobalVisaConfiguration } from '../../global-visa-configuration/entities/global-visa-configuration.entity';

@Entity('global_visa_configuration_files')
export class GlobalVisaConfigurationFile {
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

  @Column()
  global_visa_configuration_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(
    () => GlobalVisaConfiguration,
    (globalVisaConfiguration) => globalVisaConfiguration.files,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'global_visa_configuration_id' })
  globalVisaConfiguration: GlobalVisaConfiguration;
}