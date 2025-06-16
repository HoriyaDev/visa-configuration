import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany
} from 'typeorm';

import { GlobalVisaConfigurationFile } from 'src/global-visa-configuration-files/entities/global-visa-configuration-file.entity';

@Entity('global_visa_configurations')
export class GlobalVisaConfiguration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  destination_country_id: number;

  @Column()
  entry_id: number;

  @Column()
  type_id: number;

  @Column()
  stay_duration_id: number;

  @Column()
  validity_value: number;

  @Column()
  validity_unit: string;

  @Column()
  processing_priority_ids: number;

  @Column({ type: 'float' }) 
  price_structure: number;

  @Column({ type: 'text' })
  document_requirements: string;

  @Column({ type: 'text' })
  eligibility_criteria: string;

  @Column()
  is_all_residency: boolean;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(
    () => GlobalVisaConfigurationFile,
    (visaConfigurationFile) => visaConfigurationFile.globalVisaConfiguration,
    { cascade: true, eager: false }
  )
  files: GlobalVisaConfigurationFile[];
}



