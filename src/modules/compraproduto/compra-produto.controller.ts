import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CompraProdutoService } from './compra-produto.service';
import { CreateCompraProdutoDto } from './dto/create-compra-produto.dto';
import { UpdateCompraProdutoDto } from './dto/update-compra-produto.dto';
import { CompraProduto } from './entities/compra-produto.entity';

@Controller('compra-produto')
export class CompraProdutoController {
  constructor(private readonly compraProdutoService: CompraProdutoService) {}

  // Criar um novo CompraProduto
  @Post()
  async create(@Body() createCompraProdutoDto: CreateCompraProdutoDto): Promise<CompraProduto> {
    return this.compraProdutoService.create(createCompraProdutoDto);
  }

  // Listar todos os CompraProduto
  @Get()
  async findAll(): Promise<CompraProduto[]> {
    return this.compraProdutoService.findAll();
  }

  // Buscar CompraProduto por ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CompraProduto> {
    return this.compraProdutoService.findOne(id);
  }

  // Atualizar CompraProduto
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCompraProdutoDto: UpdateCompraProdutoDto
  ): Promise<CompraProduto> {
    return this.compraProdutoService.update(id, updateCompraProdutoDto);
  }

  // Remover CompraProduto
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.compraProdutoService.remove(id);
  }
}
