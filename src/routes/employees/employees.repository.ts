import { Employee } from './entities/employee.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Employee)
export class EmployeesRepository extends Repository<Employee> {}
