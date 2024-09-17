import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Patient } from "../../entities/patient.entity";

export class PatientSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const patientFactory = factoryManager.get(Patient);
    const patients = await patientFactory.saveMany(5);

    return patients;
  }
}
