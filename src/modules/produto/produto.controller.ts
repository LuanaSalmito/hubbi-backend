import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProdutoService } from './produtos.service';
import { Produto } from './entities/produto.entity';
import { CriaProdutoDto } from './dto/criar-produto.dto';
import { AtualizaProdutoDto } from './dto/atualizar-produto.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('Produtos')
@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo produto' })
  criarProduto(@Body() criaProdutoDto: CriaProdutoDto): Produto {
    return this.produtoService.criarProduto(criaProdutoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os produtos' })
  listarProdutos(): Produto[] {
    return this.produtoService.listarProdutos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém um produto por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID do produto' })
  obterProdutoPorId(@Param('id') id: number): Produto {
    return this.produtoService.obterProdutoPorId(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um produto por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID do produto' })
  atualizarProduto(@Param('id') id: number, @Body() atualizaProdutoDto: AtualizaProdutoDto): Produto {
    return this.produtoService.atualizarProduto(Number(id), atualizaProdutoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um produto por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID do produto' })
  deletarProduto(@Param('id') id: number): void {
    this.produtoService.deletarProduto(Number(id));
  }
}
