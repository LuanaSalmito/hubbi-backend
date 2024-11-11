import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { CriarCompraDto } from './dto/criar-compra.dto';

@Injectable()
export class CompraService {
  private prisma = new PrismaClient();

  async create(data: CriarCompraDto): Promise<Prisma.CompraGetPayload<{}>> {
    return this.prisma.compra.create({
      data: {
        precoTotal: data.precoTotal,
        produtos: {
          create: data.produtos.map(produto => ({
            produtoId: produto.produtoId,
            quantidade: produto.quantidade,
          })),
        },
      },
    });
  }
}
