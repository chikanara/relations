import { EmployeesRepository } from './employees.repository';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEmployeeRequestDto } from './dto/create-employee-request.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}
  async create(request: CreateEmployeeRequestDto) {
    try {
      return await this.employeesRepository.save(request);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  // update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
  //   return `This action updates a #${id} employee`;
  // }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
