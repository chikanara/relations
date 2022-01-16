import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './routes/employees/employees.module';
import { ContactsModule } from './routes/contacts/contacts.module';
import { MeetingsModule } from './routes/meetings/meetings.module';
import { TasksModule } from './routes/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    EmployeesModule,
    TasksModule,
    MeetingsModule,
    ContactsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
