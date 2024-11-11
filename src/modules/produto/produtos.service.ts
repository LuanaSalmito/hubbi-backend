import { Injectable, NotFoundException } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { CriaProdutoDto } from './dto/criar-produto.dto';
import { AtualizaProdutoDto } from './dto/atualizar-produto.dto';

@Injectable()
export class ProdutoService {
  private produtos: Produto[] = [];
  private idCounter = 1;

  criarProduto(criaProdutoDto: CriaProdutoDto): Produto {
    const novoProduto: Produto = {
      id: this.idCounter++,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...criaProdutoDto,
    };

    this.produtos.push(novoProduto);
    return novoProduto;
  }

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  obterProdutoPorId(id: number): Produto {
    const produto = this.produtos.find(prod => prod.id === id);
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  atualizarProduto(id: number, atualizaProdutoDto: AtualizaProdutoDto): Produto {
    const produto = this.obterProdutoPorId(id);
    if (atualizaProdutoDto.nome) {
      produto.nome = atualizaProdutoDto.nome;
    }
    if (atualizaProdutoDto.preco) {
      produto.preco = atualizaProdutoDto.preco;
    }
    produto.updatedAt = new Date();
    return produto;
  }

  deletarProduto(id: number): void {
    const index = this.produtos.findIndex(prod => prod.id === id);
    if (index === -1) {
      throw new NotFoundException('Produto não encontrado');
    }
    this.produtos.splice(index, 1);
  }
}
