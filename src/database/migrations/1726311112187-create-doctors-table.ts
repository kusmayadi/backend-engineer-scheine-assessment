import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDoctorsTable1726311112187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE doctors (
        id uuid DEFAULT gen_random_uuid(),
        name VARCHAR NOT NULL,
        doctor_number VARCHAR,
        signature VARCHAR,
        medical_practice_number VARCHAR,
        created_at timestamp DEFAULT now(),
        updated_at timestamp DEFAULT now()
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE doctors`);
  }
}
