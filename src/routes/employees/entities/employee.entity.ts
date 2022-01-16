import { Meeting } from './../../meetings/entities/meeting.entity';
import { Task } from './../../tasks/entities/task.entity';
import { Contact } from './../../contacts/entities/contact.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('employees')
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Column({ type: String })
  name: string;

  @OneToOne(() => Contact, (contact) => contact.employee, {
    onDelete: 'CASCADE',
  })
  contact: Contact;

  @ManyToOne(() => Employee, (manager) => manager.directiveReports, {
    onDelete: 'SET NULL',
  })
  manager: Employee;

  @OneToMany(() => Employee, (directiveReport) => directiveReport.manager)
  directiveReports: Employee[];

  @OneToMany(() => Task, (task) => task.employee)
  tasks: Task[];

  @ManyToMany(() => Meeting, (meeting) => meeting.attendues)
  @JoinTable()
  meetings: Meeting[];
}
