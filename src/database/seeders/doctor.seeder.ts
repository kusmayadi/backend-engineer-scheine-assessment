import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Doctor } from "../../entities/doctor.entity";

export class DoctorSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const doctorFactory = factoryManager.get(Doctor);
    const doctors = await doctorFactory.saveMany(5);

    return doctors;
  }
}
