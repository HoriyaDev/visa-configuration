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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: false })
  global_visa_configuration_id: number;

  @ManyToOne(
    () => GlobalVisaConfiguration,
    (visaConfiguration) => visaConfiguration.files,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'global_visa_configuration_id' })
  globalVisaConfiguration: GlobalVisaConfiguration;
}
