import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.client.upsert({
    where: { id: '9b6a811b-0307-44ab-968a-f8a640e25afd' },
    update: {},
    create: {
      id: '9b6a811b-0307-44ab-968a-f8a640e25afd',
      name: 'Maria Souza',
      email: 'maria.souza@email.com',
      cpf: '12345678900',
      phone: '(11) 91234-5678',
      status: 'Ativo',
      createdAt: new Date('2024-03-17T22:15:00.000Z'),
      updatedAt: new Date('2024-03-17T22:15:00.000Z'),
    },
  });

  await prisma.client.upsert({
    where: { id: '78f3b56d-be94-4fc3-910b-26f1cd58db4b' },
    update: {},
    create: {
      id: '78f3b56d-be94-4fc3-910b-26f1cd58db4b',
      name: 'João Silva',
      email: 'joao@email.com',
      cpf: '09876543210',
      phone: '(21) 99876-5432',
      status: 'Inativo',
      createdAt: new Date('2024-03-15T10:25:00.000Z'),
      updatedAt: new Date('2024-03-15T10:25:00.000Z'),
    },
  });

  await prisma.client.upsert({
    where: { id: 'c56942d7-264d-4f8d-868f-fe2c0f5fb0a9' },
    update: {},
    create: {
      id: 'c56942d7-264d-4f8d-868f-fe2c0f5fb0a9',
      name: 'Ana Paula',
      email: 'ana.paula@email.com',
      cpf: '55544433322',
      phone: '(31) 95555-4444',
      status: 'Aguardando ativação',
      createdAt: new Date('2024-03-16T18:04:00.000Z'),
      updatedAt: new Date('2024-03-16T18:04:00.000Z'),
    },
  });

  await prisma.client.upsert({
    where: { id: 'cecb6de4-646e-4131-83ae-90ef68e7bcc3' },
    update: {},
    create: {
      id: 'cecb6de4-646e-4131-83ae-90ef68e7bcc3',
      name: 'José Santos',
      email: 'ze.santos@email.com',
      cpf: '98745612378',
      phone: '(41) 98745-6321',
      status: 'Desativado',
      createdAt: new Date('2024-03-17T09:34:00.000Z'),
      updatedAt: new Date('2024-03-17T09:34:00.000Z'),
    },
  });

  await prisma.client.upsert({
    where: { id: '5111f38f-b30b-4bde-9388-577b8b3a154f' },
    update: {},
    create: {
      id: '5111f38f-b30b-4bde-9388-577b8b3a154f',
      name: 'Carlos Oliveira',
      email: 'carlos@email.com',
      cpf: '45612378955',
      phone: '(51) 94561-2378',
      status: 'Ativo',
      createdAt: new Date('2024-03-14T15:56:00.000Z'),
      updatedAt: new Date('2024-03-14T15:56:00.000Z'),
    },
  });

  console.log('Clientes criados com sucesso!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
