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
      name: 'study visa',
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

  const savedVisa: GlobalVisaConfiguration[] = [];

  for (const configData of configurationsToSeed) {
    const existing = await globalVisaRepo.findOne({
      where: { name: configData.name },
    });

    if (!existing) {
      const newVisa = globalVisaRepo.create(configData);
      const saveVisa = await globalVisaRepo.save(newVisa);
      savedVisa.push(saveVisa);
    }
  }

  
  const savedVisa1 = savedVisa.find(visa => visa.name === 'study visa');
  const savedVisa2 = savedVisa.find(visa => visa.name === 'work visa');

  if (!savedVisa1 || !savedVisa2) {
    console.error('❌ Visa records not found.');
    return;
  }

  const filesToSeed = [
    {
      file_name: 'university_letter.pdf',
      file_url: 'https://example.com/files/university_letter.pdf',
      file_type: 'application/pdf',
      display_name: 'University Letter',
      is_active: true,
      global_visa_configuration_id: savedVisa1.id,
    },
    {
      file_name: 'passport_copy.pdf',
      file_url: 'https://example.com/files/passport_copy.pdf',
      file_type: 'application/pdf',
      display_name: 'Passport Copy',
      is_active: true,
      global_visa_configuration_id: savedVisa1.id,
    },
    {
      file_name: 'job_offer.pdf',
      file_url: 'https://example.com/files/job_offer.pdf',
      file_type: 'application/pdf',
      display_name: 'Job Offer',
      is_active: true,
      global_visa_configuration_id: savedVisa2.id,
    },
  ];

  for (const file of filesToSeed) {
    const existing = await globalVisaFileRepo.findOne({
      where: {
        file_name: file.file_name,
        global_visa_configuration_id: file.global_visa_configuration_id,
      },
    });

    if (!existing) {
      const newFile = globalVisaFileRepo.create(file);
      await globalVisaFileRepo.save(newFile);
     
    }
  }

  await AppDataSource.destroy();
  console.log('✅ Seeding completed and database connection closed.');
}

seed().catch((err) => {
  console.error('❌ Seeding error:', err);
});
