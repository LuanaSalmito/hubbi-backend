import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VendaService } from './venda.service';
import { CriarVendaDto } from './dto/criar-venda.dto';
import { Venda } from './entities/venda.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('vendas')
@Controller('vendas')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo pedido de venda' })
  @ApiResponse({
    status: 201,
    description: 'Venda criada com sucesso.',
    type: Venda,
    examples: {
      exemplo1: {
        summary: 'Exemplo de criação de venda',
        value: {
          id: '123456789',
          cliente: 'Luana Salmito',
          produtos: ['Suspensão', 'Freio'],
          quantidade: [2, 1],
          total: 150.50,
        },
      },
    },
  })
  async criar(@Body() criarVendaDto: CriarVendaDto): Promise<Venda> {
    return this.vendaService.criar(criarVendaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as vendas registradas' })
  @ApiResponse({
    status: 200,
    description: 'Listagem de vendas',
    type: [Venda],
    examples: {
      exemplo1: {
        summary: 'Exemplo de listagem de vendas',
        value: [
          {
            id: '123456789',
            cliente: 'João da Silva',
            produtos: ['Produto A', 'Produto B'],
            quantidade: [2, 1],
            total: 150.50,
          },
        ],
      },
    },
  })
  async listarTodas(): Promise<Venda[]> {
    return this.vendaService.listarTodas();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Visualizar detalhes de uma venda específica' })
  @ApiParam({ name: 'id', description: 'ID da venda', required: true })
  @ApiResponse({
    status: 200,
    description: 'Detalhes da venda',
    type: Venda,
    examples: {
      exemplo1: {
        summary: 'Exemplo de detalhes de uma venda',
        value: {
          id: '123456789',
          cliente: 'João da Silva',
          produtos: ['Produto A', 'Produto B'],
          quantidade: [2, 1],
          total: 150.50,
        },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Venda não encontrada' })
  async visualizarDetalhes(@Param('id') id: string): Promise<Venda> {
    return this.vendaService.visualizarDetalhes(id);
  }
}
