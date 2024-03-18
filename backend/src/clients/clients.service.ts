import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  create(createClientDto: CreateClientDto): Promise<Client> {
    return this.prisma.client.create({ data: createClientDto });
  }

  findAll(): Promise<Client[]> {
    return this.prisma.client.findMany();
  }

  findOne(id: string): Promise<Client> {
    return this.prisma.client.findUnique({ where: { id } });
  }

  update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    return this.prisma.client.update({ where: { id }, data: updateClientDto });
  }

  remove(id: string): Promise<Client> {
    return this.prisma.client.delete({ where: { id } });
  }
}
