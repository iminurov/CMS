import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { Type } from "class-transformer";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventEntity } from "./event.entity";
import { UserEntity } from "../user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity]), EventEntity, EventEntity],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
