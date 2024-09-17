import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("patients")
export class Patient {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ name: "first_name" })
  firstName!: string;

  @Column({ name: "surname" })
  surname!: string;

  @Column({ name: "date_of_birth", type: "timestamp" })
  dateOfBirth!: Date;

  @Column({ name: "insurance_company" })
  insuranceCompany?: string;

  @Column({ name: "insurance_number" })
  insuranceNumber?: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
