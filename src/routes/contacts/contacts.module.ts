import { ContcatsRepository } from './contacts.repository';
import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  imports: [ContcatsRepository],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
