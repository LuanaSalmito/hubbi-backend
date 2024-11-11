import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VendaProdutoService } from './venda-produto.service';
import { VendaProdutoController } from './venda-produto.controller';

@Module({
  controllers: [VendaProdutoController],
  providers: [VendaProdutoService, PrismaService],
})
export class VendaProdutoModule {}
