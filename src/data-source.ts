import dotenv from "dotenv";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { Doctor } from "./entities/doctor.entity";
import { DoctorFactory } from "./database/factories/doctor.factory";
import { DoctorSeeder } from "./database/seeders/doctor.seeder";
import { PatientFactory } from "./database/factories/patient.factory";
import { PatientSeeder } from "./database/seeders/patient.seeder.";
import { Patient } from "./entities/patient.entity";

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: DB_HOST || "localhost",
  port: Number(DB_PORT) || 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: true,
  entities: [Doctor, Patient],
  migrations: [`${__dirname}/database/migrations/*.ts`],
  factories: [DoctorFactory, PatientFactory],
  seeds: [DoctorSeeder, PatientSeeder],
  subscribers: [],
};

export const AppDataSource = new DataSource(options);
