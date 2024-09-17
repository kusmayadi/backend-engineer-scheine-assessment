import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePatientsTable1726371744076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE patients (
          id uuid DEFAULT gen_random_uuid(),
          first_name VARCHAR NOT NULL,
          surname VARCHAR NOT NULL,
          date_of_birth DATE,
          insurance_company VARCHAR,
          insurance_number VARCHAR,
          created_at timestamp DEFAULT now(),
          updated_at timestamp DEFAULT now()
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE patients`);
  }
}
