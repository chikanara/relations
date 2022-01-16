import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEmployeeRequestDto {
  @ApiProperty({ type: String })
  @IsString()
  name!: string;
}
