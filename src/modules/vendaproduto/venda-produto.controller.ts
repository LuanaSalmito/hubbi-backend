import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VendaProdutoService } from './venda-produto.service';
import { VendaProduto } from '@prisma/client';
import { CreateVendaProdutoDto } from './dto/create-venda-produto-dto';
import { UpdateVendaProdutoDto } from './dto/update-venda-produto.dto';

@Controller('venda-produto')
export class VendaProdutoController {
  constructor(private readonly vendaProdutoService: VendaProdutoService) {}

  @Post()
  async create(@Body() createVendaProdutoDto: CreateVendaProdutoDto): Promise<VendaProduto> {
    return this.vendaProdutoService.create(createVendaProdutoDto);
  }

  @Get()
  async findAll(): Promise<VendaProduto[]> {
    return this.vendaProdutoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<VendaProduto> {
    return this.vendaProdutoService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateVendaProdutoDto: UpdateVendaProdutoDto): Promise<VendaProduto> {
    return this.vendaProdutoService.update(id, updateVendaProdutoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.vendaProdutoService.remove(id);
  }
}
