import { Employee } from 'src/routes/employees/entities/employee.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  readonly id!: number;
  @Column({ type: String, nullable: true })
  zoomUrl: string;
  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendues: Employee[];
}
