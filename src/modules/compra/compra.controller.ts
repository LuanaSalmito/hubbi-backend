import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CriarCompraDto } from './dto/criar-compra.dto';
import { AtualizarCompraDto } from './dto/atualizar-compra.dto';
import { Prisma } from '@prisma/client';

type Compra = Prisma.CompraGetPayload<{}>;

@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  async create(@Body() createCompraDto: CriarCompraDto): Promise<Compra> {
    // O método `create` irá receber o DTO e criar a nova compra
    return this.compraService.create(createCompraDto);
  }

  // Outros métodos permanecem os mesmos
}
