import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis;

const prismadb = globalForPrisma.prisma ?? prismaClientSingleton();

export default prismadb;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismadb;
