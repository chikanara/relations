import { Employee } from './../../employees/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  readonly id!: number;
  @Column({ type: String })
  phone!: string;
  @Column({ type: String })
  email!: string;
  @OneToOne(() => Employee, (employee) => employee.contact)
  @JoinColumn()
  employee: Employee;
}
