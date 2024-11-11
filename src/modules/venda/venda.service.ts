import { Injectable, NotFoundException } from '@nestjs/common';
import { Venda } from './entities/venda.entity';
import { CriarVendaDto } from './dto/criar-venda.dto';

@Injectable()
export class VendaService {
  private vendas: Venda[] = [];

  criar(criarVendaDto: CriarVendaDto): Venda {
    const novaVenda: Venda = {
      id: Date.now().toString(),
      ...criarVendaDto,
    };
    this.vendas.push(novaVenda);
    return novaVenda;
  }

  listarTodas(): Venda[] {
    return this.vendas;
  }

  visualizarDetalhes(id: string): Venda {
    const venda = this.vendas.find(venda => venda.id === id);
    if (!venda) {
      throw new NotFoundException(`Venda com ID ${id} não encontrada`);
    }
    return venda;
  }
}
