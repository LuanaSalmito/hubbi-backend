import { Module } from '@nestjs/common';
import { CompraProdutoService } from './compra-produto.service';
import { CompraProdutoController } from './compra-produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CompraProdutoController],
  providers: [CompraProdutoService, PrismaService],
})
export class CompraProdutoModule {}
