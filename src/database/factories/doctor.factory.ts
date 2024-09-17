import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Doctor } from "../../entities/doctor.entity";

export const DoctorFactory = setSeederFactory(Doctor, (faker: Faker) => {
  const doctor = new Doctor();
  doctor.name = faker.person.fullName();
  doctor.signature = faker.image.url({ width: 100, height: 100 });
  doctor.doctorNumber = faker.number
    .int({ min: 100000, max: 999999 })
    .toString();
  doctor.medicalPracticeNumber = faker.number
    .int({ min: 10000, max: 99999 })
    .toString();

  return doctor;
});
