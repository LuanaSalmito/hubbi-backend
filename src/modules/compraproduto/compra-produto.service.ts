import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompraProdutoDto } from './dto/create-compra-produto.dto';
import { UpdateCompraProdutoDto } from './dto/update-compra-produto.dto';
import { CompraProduto } from './entities/compra-produto.entity';

@Injectable()
export class CompraProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  // Criar um CompraProduto
  async create(createCompraProdutoDto: CreateCompraProdutoDto): Promise<CompraProduto> {
    const { compraId, produtoId, quantidade } = createCompraProdutoDto;

    // Verificar se a Compra existe
    const compra = await this.prisma.compra.findUnique({ where: { id: compraId } });
    if (!compra) {
      throw new NotFoundException(`Compra com ID ${compraId} não encontrada.`);
    }

    // Verificar se o Produto existe
    const produto = await this.prisma.produto.findUnique({ where: { id: produtoId } });
    if (!produto) {
      throw new NotFoundException(`Produto com ID ${produtoId} não encontrado.`);
    }

    // Criar o CompraProduto
    const compraProduto = await this.prisma.compraProduto.create({
      data: {
        compraId,
        produtoId,
        quantidade,
      },
      include: {
        compra: true,  // Incluir dados da Compra relacionada
        produto: true, // Incluir dados do Produto relacionado
      },
    });

    return compraProduto;
  }

  // Buscar todos os CompraProduto
  async findAll(): Promise<CompraProduto[]> {
    return this.prisma.compraProduto.findMany({
      include: {
        compra: true,  // Incluir dados da Compra relacionada
        produto: true, // Incluir dados do Produto relacionado
      },
    });
  }

  // Buscar um CompraProduto por ID
  async findOne(id: number): Promise<CompraProduto> {
    const compraProduto = await this.prisma.compraProduto.findUnique({
      where: { id },
      include: {
        compra: true,  // Incluir dados da Compra relacionada
        produto: true, // Incluir dados do Produto relacionado
      },
    });

    if (!compraProduto) {
      throw new NotFoundException(`CompraProduto com ID ${id} não encontrado.`);
    }

    return compraProduto;
  }

  // Atualizar um CompraProduto
  async update(id: number, updateCompraProdutoDto: UpdateCompraProdutoDto): Promise<CompraProduto> {
    // Verificar se o CompraProduto existe
    const existingCompraProduto = await this.prisma.compraProduto.findUnique({
      where: { id },
    });

    if (!existingCompraProduto) {
      throw new NotFoundException(`CompraProduto com ID ${id} não encontrado.`);
    }

    // Atualizar o CompraProduto
    const updatedCompraProduto = await this.prisma.compraProduto.update({
      where: { id },
      data: updateCompraProdutoDto,
      include: {
        compra: true,  // Incluir dados da Compra relacionada
        produto: true, // Incluir dados do Produto relacionado
      },
    });

    return updatedCompraProduto;
  }

  // Remover um CompraProduto
  async remove(id: number): Promise<void> {
    // Verificar se o CompraProduto existe
    const existingCompraProduto = await this.findOne(id);

    // Remover o CompraProduto
    await this.prisma.compraProduto.delete({
      where: { id },
    });

    return; // Não há necessidade de retornar nada, pois a função é void
  }
}
