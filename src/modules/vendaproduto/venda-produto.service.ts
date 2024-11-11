import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVendaProdutoDto } from './dto/create-venda-produto-dto';
import { UpdateVendaProdutoDto } from './dto/update-venda-produto.dto';
import { VendaProduto } from '@prisma/client';

@Injectable()
export class VendaProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createVendaProdutoDto: CreateVendaProdutoDto): Promise<VendaProduto> {
    const { vendaId, produtoId, quantidade } = createVendaProdutoDto;

    const venda = await this.prisma.venda.findUnique({ where: { id: vendaId } });
    if (!venda) {
      throw new NotFoundException(`Venda com ID ${vendaId} não encontrada.`);
    }

    const produto = await this.prisma.produto.findUnique({ where: { id: produtoId } });
    if (!produto) {
      throw new NotFoundException(`Produto com ID ${produtoId} não encontrado.`);
    }

    return this.prisma.vendaProduto.create({
      data: {
        vendaId,
        produtoId,
        quantidade,
      },
    });
  }

  async findAll(): Promise<VendaProduto[]> {
    return this.prisma.vendaProduto.findMany({
      include: {
        venda: true,
        produto: true,
      },
    });
  }

  async findOne(id: number): Promise<VendaProduto> {
    const vendaProduto = await this.prisma.vendaProduto.findUnique({
      where: { id },
      include: {
        venda: true,
        produto: true,
      },
    });

    if (!vendaProduto) {
      throw new NotFoundException(`VendaProduto com ID ${id} não encontrado.`);
    }

    return vendaProduto;
  }

  async update(id: number, updateVendaProdutoDto: UpdateVendaProdutoDto): Promise<VendaProduto> {
    const existingVendaProduto = await this.prisma.vendaProduto.findUnique({
      where: { id },
    });

    if (!existingVendaProduto) {
      throw new NotFoundException(`VendaProduto com ID ${id} não encontrado.`);
    }

    return this.prisma.vendaProduto.update({
      where: { id },
      data: updateVendaProdutoDto,
    });
  }

  async remove(id: number): Promise<void> {
    const existingVendaProduto = await this.findOne(id);

    await this.prisma.vendaProduto.delete({
      where: { id },
    });
  }
}
