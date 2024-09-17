import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Patient } from "../../entities/patient.entity";

export const PatientFactory = setSeederFactory(Patient, (faker: Faker) => {
  const patient = new Patient();
  patient.firstName = faker.person.firstName();
  patient.surname = faker.person.lastName();
  patient.dateOfBirth = faker.date.birthdate();
  patient.insuranceCompany = faker.company.name();
  patient.insuranceNumber = faker.number
    .int({ min: 1000000, max: 9999999 })
    .toString();

  return patient;
});
