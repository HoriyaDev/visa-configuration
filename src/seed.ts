import { DataSource } from "typeorm";
import { pgConfig } from "../dbConfig";
import { GlobalVisaConfiguration } from "./global-visa-configuration/entities/global-visa-configuration.entity";
import { GlobalVisaConfigurationFile } from "./global-visa-configuration-files/entities/global-visa-configuration-file.entity";

const AppDataSource = new DataSource({
  ...pgConfig,
  entities: [GlobalVisaConfiguration, GlobalVisaConfigurationFile],
  synchronize: true,
});

async function seed() {
  await AppDataSource.initialize();

  const globalVisaRepo = AppDataSource.getRepository(GlobalVisaConfiguration);
  const globalVisaFileRepo = AppDataSource.getRepository(GlobalVisaConfigurationFile);

  const configurationsToSeed = [
    {
      name: 'tourist visa',
      description: 'For higher education students',
      destination_country_id: 1,
      entry_id: 1,
      type_id: 1,
      stay_duration_id: 1,
      validity_value: 365,
      validity_unit: 'days',
      processing_priority_ids: 1,
      price_structure: 500,
      document_requirements: 'Passport, University Letter',
      eligibility_criteria: 'Must be admitted to a university',
      is_all_residency: true,
      is_active: true,
    },
    {
      name: 'work visa',
      description: 'For professionals seeking employment',
      destination_country_id: 2,
      entry_id: 2,
      type_id: 2,
      stay_duration_id: 2,
      validity_value: 730,
      validity_unit: 'days',
      processing_priority_ids: 2,
      price_structure: 800,
      document_requirements: 'Job Offer, Passport',
      eligibility_criteria: 'Must have an employment contract',
      is_all_residency: false,
      is_active: true,
    },
  ];

  const visaMap: Record<string, GlobalVisaConfiguration> = {};


  for (const config of configurationsToSeed) {
    const existing = await globalVisaRepo.findOne({ where: { name: config.name } });
    if (!existing) {
      const newVisa = globalVisaRepo.create(config);
      const saved = await globalVisaRepo.save(newVisa);
      visaMap[config.name] = saved;
      console.log(`✅ Created visa configuration: ${config.name}`);
    } else {
      visaMap[config.name] = existing;
      console.log(`ℹ️  Visa configuration already exists: ${config.name}`);
    }
  }

  const filesToSeed = [
    {
      file_name: 'university_letter.pdf',
      file_url: 'https://example.com/files/university_letter.pdf',
      file_type: 'application/pdf',
      display_name: 'University Letter',
      is_active: true,
      visa_name: 'tourist visa',
    },
    {
      file_name: 'passport_copy.pdf',
      file_url: 'https://example.com/files/passport_copy.pdf',
      file_type: 'application/pdf',
      display_name: 'Passport Copy',
      is_active: true,
      visa_name: 'tourist visa',
    },
    {
      file_name: 'job_offer.pdf',
      file_url: 'https://example.com/files/job_offer.pdf',
      file_type: 'application/pdf',
      display_name: 'Job Offer',
      is_active: true,
      visa_name: 'work visa',
    },
  ];

  // Seed visa configuration files
  for (const file of filesToSeed) {
    const visa = visaMap[file.visa_name];
    if (!visa) {
      console.log(`⚠️  Skipping file ${file.file_name} - visa configuration not found: ${file.visa_name}`);
      continue;
    }

    const existing = await globalVisaFileRepo.findOne({
      where: {
        file_name: file.file_name,
        global_visa_configuration_id: visa.id,
      },
    });

    if (!existing) {
      const newFile = globalVisaFileRepo.create({
        ...file,
        global_visa_configuration_id: visa.id,
      });
      await globalVisaFileRepo.save(newFile);
      console.log(`✅ Created file: ${file.file_name} for ${file.visa_name}`);
    } else {
      console.log(`ℹ️  File already exists: ${file.file_name} for ${file.visa_name}`);
    }
  }

  await AppDataSource.destroy();
  console.log('✅ Seeding completed and database connection closed.');
}

seed().catch((err) => {
  console.error('❌ Seeding error:', err);
});
